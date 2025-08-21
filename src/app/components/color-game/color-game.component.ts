import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameState, Player, Card, Suit, Rank, Trick, RankValue } from '../../models/color-game.models';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-color-game',
  templateUrl: './color-game.component.html',
  styleUrls: ['./color-game.component.scss']
})
export class ColorGameComponent implements OnInit {
  RankValue = RankValue; // Make enum available in the template
  Suit = Suit; // Make enum available in the template
  gameState!: GameState;

  ngOnInit(): void {
    this.setupGame();
  }

  setupGame(): void {
    const players = this.initializePlayers();
    const deck = this.createDeck();
    this.shuffleDeck(deck);

    this.gameState = {
      players,
      deck,
      trumpSuit: undefined,
      currentPlayerIndex: 0, // Player 1 starts
      currentTrick: { cards: [] },
      roundNumber: 1,
      partyARoundScore: 0,
      partyBRoundScore: 0,
      partyAMatchScore: this.gameState?.partyAMatchScore || 0, // Persist match score across rounds
      partyBMatchScore: this.gameState?.partyBMatchScore || 0,
      gamePhase: 'choosing_trump',
      message: 'Player 1, choose the Color.'
    };

    this.dealCards();
  }

  initializePlayers(): Player[] {
    return [
      { id: 1, name: 'Player 1', hand: [], tricksWon: 0, isPartyA: true },
      { id: 2, name: 'Player 2', hand: [], tricksWon: 0, isPartyA: false },
      { id: 3, name: 'Player 3', hand: [], tricksWon: 0, isPartyA: true },
      { id: 4, name: 'Player 4', hand: [], tricksWon: 0, isPartyA: false },
    ];
  }

  createDeck(): Card[] {
    const suits = Object.values(Suit);
    const ranks = Object.values(Rank);
    const deck: Card[] = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push({ suit, rank });
      }
    }
    return deck;
  }

  shuffleDeck(deck: Card[]): void {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  dealCards(): void {
    // 1. Deal 5 cards to Player 1
    for (let i = 0; i < 5; i++) {
      this.gameState.players[0].hand.push(this.gameState.deck.pop()!);
    }

    // After player 1 chooses trump, the rest of the cards will be dealt.
    // For now, we'll stop here until the trump is chosen.
  }

  // This method will be called by the UI
  chooseTrump(suit: Suit): void {
    if (this.gameState.gamePhase !== 'choosing_trump') return;

    this.gameState.trumpSuit = suit;
    this.gameState.message = `Color is ${suit}. Dealing remaining cards.`;

    // Deal 5 cards to other players
    for (let i = 1; i < 4; i++) {
      for (let j = 0; j < 5; j++) {
        this.gameState.players[i].hand.push(this.gameState.deck.pop()!);
      }
    }

    // Deal remaining cards in rounds of 4
    const remainingCards = this.gameState.deck.length;
    for (let i = 0; i < remainingCards / 4; i++) {
        for (let p_idx = 0; p_idx < 4; p_idx++) {
            this.gameState.players[p_idx].hand.push(this.gameState.deck.pop()!);
        }
    }

    // Sort each player's hand
    this.gameState.players.forEach(player => {
      player.hand.sort((a, b) => {
        const suitOrder = { [Suit.Spades]: 4, [Suit.Hearts]: 3, [Suit.Clubs]: 2, [Suit.Diamonds]: 1 };
        if (a.suit !== b.suit) {
          return suitOrder[b.suit] - suitOrder[a.suit]; // Sort suits in descending order of importance
        }
        return this.RankValue[b.rank] - this.RankValue[a.rank]; // Sort ranks in descending order
      });
    });

    this.gameState.gamePhase = 'playing';
    this.gameState.message = `Player ${this.gameState.players[this.gameState.currentPlayerIndex].name}'s turn to start.`;
  }

    playCard(player: Player, card: Card): void {
    const currentPlayer = this.gameState.players[this.gameState.currentPlayerIndex];

    if (player.id !== currentPlayer.id) {
      const originalMessage = this.gameState.message;
      this.gameState.message = `It's not your turn! It's ${currentPlayer.name}'s turn.`;
      // Revert the message after a short delay
      setTimeout(() => {
        this.gameState.message = originalMessage;
      }, 2000);
      return;
    }
    
    // Basic validation
    if (this.gameState.gamePhase !== 'playing') return;
    if (!this.isCardPlayable(card, player.hand)) return;

    // Move card from hand to trick
    player.hand = player.hand.filter(c => c !== card);
    this.gameState.currentTrick.cards.push({ player, card });

    // Set leading suit for the trick
    if (this.gameState.currentTrick.cards.length === 1) {
      this.gameState.currentTrick.leadingSuit = card.suit;
    }

    // Check if trick is complete
    if (this.gameState.currentTrick.cards.length === 4) {
      this.evaluateTrick();
    } else {
      // Advance to next player
      this.gameState.currentPlayerIndex = (this.gameState.currentPlayerIndex + 1) % 4;
      this.gameState.message = `Player ${this.gameState.players[this.gameState.currentPlayerIndex].name}'s turn.`;
    }
  }

  isCardPlayable(card: Card, hand: Card[]): boolean {
    const leadingSuit = this.gameState.currentTrick.leadingSuit;
    if (!leadingSuit) {
      return true; // Any card can be played to start a trick
    }

    const playerHasLeadingSuit = hand.some(c => c.suit === leadingSuit);
    if (playerHasLeadingSuit) {
      return card.suit === leadingSuit; // Must follow suit if possible
    } 

    return true; // Can play any card if not holding the leading suit
  }

  evaluateTrick(): void {
    this.gameState.message = 'Evaluating trick...';

    setTimeout(() => {
      const trick = this.gameState.currentTrick;
      const trumpSuit = this.gameState.trumpSuit!;
      const leadingSuit = trick.leadingSuit!;

      let winningPlay = trick.cards[0];

      for (let i = 1; i < trick.cards.length; i++) {
        const currentPlay = trick.cards[i];
        const winningCard = winningPlay.card;
        const currentCard = currentPlay.card;

        if (winningCard.suit === trumpSuit) {
          // If winning card is trump, current must be a higher trump to win
          if (currentCard.suit === trumpSuit && RankValue[currentCard.rank] > RankValue[winningCard.rank]) {
            winningPlay = currentPlay;
          }
        } else {
          // If winning card is not trump
          if (currentCard.suit === trumpSuit) {
            // Current card is trump, it wins
            winningPlay = currentPlay;
          } else if (currentCard.suit === leadingSuit && RankValue[currentCard.rank] > RankValue[winningCard.rank]) {
            // Both are leading suit, higher rank wins
            winningPlay = currentPlay;
          }
        }
      }

      const winner = winningPlay.player;
      winner.tricksWon++;

      // Update party scores
      if (winner.isPartyA) {
        this.gameState.partyARoundScore++;
      } else {
        this.gameState.partyBRoundScore++;
      }

      // Check for round end
      if (this.gameState.players.every(p => p.hand.length === 0)) {
        this.endRound();
      } else {
        // Winner of the trick starts the next one
        this.gameState.currentPlayerIndex = this.gameState.players.findIndex(p => p.id === winner.id);
        this.gameState.currentTrick = { cards: [] };
        this.gameState.message = `Player ${winner.name} won the trick! Their turn to start.`;
      }
    }, 1500); // Delay for user to see the trick
  }

  endRound(): void {
    this.gameState.gamePhase = 'round_over';
    const partyA = this.gameState.partyARoundScore;
    const partyB = this.gameState.partyBRoundScore;
    let roundWinner: 'A' | 'B' | 'Draw' = 'Draw';

    if (partyA > partyB) {
      this.gameState.partyAMatchScore++;
      roundWinner = 'A';
    } else if (partyB > partyA) {
      this.gameState.partyBMatchScore++;
      roundWinner = 'B';
    }

    if (this.gameState.partyAMatchScore >= 7) {
      this.gameState.message = 'Party A wins the match!';
      this.gameState.gamePhase = 'game_over';
    } else if (this.gameState.partyBMatchScore >= 7) {
      this.gameState.message = 'Party B wins the match!';
      this.gameState.gamePhase = 'game_over';
    } else {
      // Start next round after a delay
      this.gameState.message = `Round Over! ${roundWinner !== 'Draw' ? `Party ${roundWinner} wins!` : 'It\'s a draw!'}`;
      setTimeout(() => {
        this.gameState.roundNumber++;
        this.setupGame(); // Re-setup for the next round
      }, 3000);
    }
  }

  newGame(): void {
    this.gameState.partyAMatchScore = 0;
    this.gameState.partyBMatchScore = 0;
    this.gameState.roundNumber = 1;
    this.setupGame();
  }
}
