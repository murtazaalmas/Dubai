import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrumpSuitDisplayComponent } from '../trump-suit-display/trump-suit-display.component';
import { GameState, Player, Card, Suit, Rank, Trick, RankValue } from '../../models/color-game.models';
import { MessageService } from '../../services/message.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, TrumpSuitDisplayComponent],
  selector: 'app-color-game',
  templateUrl: './color-game.component.html',
  styleUrls: ['./color-game.component.scss']
})
export class ColorGameComponent implements OnInit {
  RankValue = RankValue; // Make enum available in the template
  Suit = Suit; // Make enum available in the template
  gameState!: GameState;
  cardPlayInProgress = false;
  setupStep = 1; // 1 for party names, 2 for player names

  constructor(private messageService: MessageService) {}

  partyAName: string = 'Party A';
  partyBName: string = 'Party B';
  playerNames: string[] = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];

  ngOnInit(): void {
    this.loadGameState();
  }

  nextStep(): void {
    this.setupStep = 2;
  }

  previousStep(): void {
    this.setupStep = 1;
  }

  startGame(): void {
    localStorage.removeItem('colorGameState');
    this.gameState = {} as GameState; // Reset state
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
      trickStreak: [],
      lastTrickWinnerId: undefined,
      streakHolder: undefined,
      roundNumber: 1,
      partyAName: this.partyAName,
      partyBName: this.partyBName,
      partyARoundScore: 0,
      partyBRoundScore: 0,
      partyAMatchScore: this.gameState?.partyAMatchScore || 0, // Persist match score across rounds
      partyBMatchScore: this.gameState?.partyBMatchScore || 0,
      gamePhase: 'choosing_trump',
      message: '',
      trumpSuitForDisplay: null
    };

    this.dealCards();
    this.saveGameState();
  }

  initializePlayers(): Player[] {
    return [
      { id: 1, name: this.playerNames[0], hand: [], tricksWon: [], consecutiveWins: 0, isPartyA: true },
      { id: 2, name: this.playerNames[1], hand: [], tricksWon: [], consecutiveWins: 0, isPartyA: false },
      { id: 3, name: this.playerNames[2], hand: [], tricksWon: [], consecutiveWins: 0, isPartyA: true },
      { id: 4, name: this.playerNames[3], hand: [], tricksWon: [], consecutiveWins: 0, isPartyA: false },
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
    this.gameState.trumpSuitForDisplay = suit;
    this.messageService.showMessage(`Color chosen: ${suit}`);

    setTimeout(() => {
      this.gameState.trumpSuitForDisplay = null;
    }, 2500); // Corresponds to the animation duration

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
    this.messageService.showMessage(`Player ${this.gameState.players[this.gameState.currentPlayerIndex].name}'s turn to start.`);
    this.saveGameState();
  }

      playCard(player: Player, card: Card): void {
    if (this.cardPlayInProgress) return; // Prevent playing multiple cards

    const currentPlayer = this.gameState.players[this.gameState.currentPlayerIndex];

    if (player.id !== currentPlayer.id) {
      const originalMessage = this.gameState.message;
      this.messageService.showMessage(`It's not your turn! It's ${currentPlayer.name}'s turn.`);
      // Revert the message after a short delay
      setTimeout(() => {
        this.gameState.message = originalMessage;
      }, 2000);
      return;
    }
    
    // Basic validation
    if (this.gameState.gamePhase !== 'playing') return;
        if (!this.isCardPlayable(card, player.hand)) return;

    this.cardPlayInProgress = true; // Lock card play

    // Move card from hand to trick
    player.hand = player.hand.filter(c => c !== card);
    this.gameState.currentTrick.cards.push({ player, card });
    this.saveGameState();

    // Set leading suit for the trick
    if (this.gameState.currentTrick.cards.length === 1) {
      this.gameState.currentTrick.leadingSuit = card.suit;
    }

    // Check if trick is complete
    if (this.gameState.currentTrick.cards.length === 4) {
            this.evaluateTrick();
    } else {
      // Advance to next player
            // Advance to next player
      this.gameState.currentPlayerIndex = (this.gameState.currentPlayerIndex + 1) % 4;
      this.messageService.showMessage(`Player ${this.gameState.players[this.gameState.currentPlayerIndex].name}'s turn.`);
      this.cardPlayInProgress = false; // Unlock for next player
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
    this.messageService.showMessage('Evaluating trick...');

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

      // Add current trick's cards to the streak
      this.gameState.trickStreak.push(...this.gameState.currentTrick.cards.map(c => c.card));

      if (this.gameState.lastTrickWinnerId === winner.id) {
        winner.consecutiveWins++;
      } else {
        // Reset other players' consecutive wins
        this.gameState.players.forEach(p => {
          if (p.id !== winner.id) {
            p.consecutiveWins = 0;
          }
        });
        winner.consecutiveWins = 1;
        this.gameState.lastTrickWinnerId = winner.id;
        this.gameState.streakHolder = { name: winner.name, party: winner.isPartyA ? 'A' : 'B' };
      }

      if (winner.consecutiveWins === 2) {
        // Player wins the streak
        const tricksInStreak = Math.floor(this.gameState.trickStreak.length / 4);
        for (let i = 0; i < tricksInStreak; i++) {
          // This is a simplified representation. You might want to store actual trick objects.
          winner.tricksWon.push({ cards: [] });
        }

        if (winner.isPartyA) {
          this.gameState.partyARoundScore += tricksInStreak;
        } else {
          this.gameState.partyBRoundScore += tricksInStreak;
        }

        this.messageService.showMessage(`${winner.name} won a streak of ${tricksInStreak} tricks!`);
        this.gameState.trickStreak = []; // Clear the streak
        winner.consecutiveWins = 0; // Reset winner's streak
        this.gameState.lastTrickWinnerId = undefined; // Reset last winner
        this.gameState.streakHolder = undefined;

      } else {
        // No streak win, just a normal trick win for now
        // The trick is kept in the streak pile until the streak is broken or won
        this.messageService.showMessage(`${winner.name} won the trick.`);
      }

      // Check for round end
      if (this.gameState.players.every(p => p.hand.length === 0)) {
        // If there's a pending streak, award it to the last winner's party
        if (this.gameState.trickStreak.length > 0) {
          const lastWinner = this.gameState.players.find(p => p.id === this.gameState.lastTrickWinnerId);
          if(lastWinner) {
            const tricksInStreak = Math.floor(this.gameState.trickStreak.length / 4);
            if (lastWinner.isPartyA) {
              this.gameState.partyARoundScore += tricksInStreak;
            } else {
              this.gameState.partyBRoundScore += tricksInStreak;
            }
          }
        }
                this.endRound();
        this.cardPlayInProgress = false; // Unlock for new round/game
      } else {
        // Winner of the trick starts the next one
                // Winner of the trick starts the next one
        this.gameState.currentPlayerIndex = this.gameState.players.findIndex(p => p.id === winner.id);
        this.gameState.currentTrick = { cards: [] };
        this.cardPlayInProgress = false; // Unlock for next trick
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
      this.messageService.showMessage('Party A wins the match!');
      this.gameState.gamePhase = 'game_over';
    } else if (this.gameState.partyBMatchScore >= 7) {
      this.messageService.showMessage('Party B wins the match!');
      this.gameState.gamePhase = 'game_over';
    } else {
      // Start next round after a delay
      this.messageService.showMessage(`Round Over! ${roundWinner !== 'Draw' ? `Party ${roundWinner} wins!` : 'It\'s a draw!'}`);
      setTimeout(() => {
        this.gameState.roundNumber++;
        this.setupGame(); // Re-setup for the next round
      }, 3000);
    }
  }

  saveGameState(): void {
    localStorage.setItem('colorGameState', JSON.stringify(this.gameState));
  }

  loadGameState(): void {
    const savedState = localStorage.getItem('colorGameState');
    if (savedState) {
      this.gameState = JSON.parse(savedState);
    } else {
      this.gameState = { gamePhase: 'setup' } as GameState;
    }
  }

  forfeitRound(): void {
    if (this.gameState.gamePhase !== 'playing') return;

    const currentPlayer = this.gameState.players[this.gameState.currentPlayerIndex];
    if (currentPlayer.isPartyA) {
      this.gameState.partyBMatchScore++;
      this.messageService.showMessage(`${this.gameState.partyAName} forfeits. ${this.gameState.partyBName} wins the round.`);
    } else {
      this.gameState.partyAMatchScore++;
      this.messageService.showMessage(`${this.gameState.partyBName} forfeits. ${this.gameState.partyAName} wins the round.`);
    }

    if (this.gameState.partyAMatchScore >= 7 || this.gameState.partyBMatchScore >= 7) {
      this.gameState.gamePhase = 'game_over';
    } else {
      this.gameState.roundNumber++;
      this.setupGame();
    }

    this.saveGameState();
  }

  newGame(): void {
    localStorage.removeItem('colorGameState');
    this.gameState = { gamePhase: 'setup' } as GameState;
    this.saveGameState(); // Save the clean setup state
  }
}
