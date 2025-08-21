export enum Suit {
  Spades = '♠',
  Hearts = '♥',
  Diamonds = '♦',
  Clubs = '♣'
}

export enum Rank {
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'J',
  Queen = 'Q',
  King = 'K',
  Ace = 'A'
}

// To easily compare cards, we can assign a value to each rank.
export const RankValue = {
  [Rank.Two]: 2,
  [Rank.Three]: 3,
  [Rank.Four]: 4,
  [Rank.Five]: 5,
  [Rank.Six]: 6,
  [Rank.Seven]: 7,
  [Rank.Eight]: 8,
  [Rank.Nine]: 9,
  [Rank.Ten]: 10,
  [Rank.Jack]: 11,
  [Rank.Queen]: 12,
  [Rank.King]: 13,
  [Rank.Ace]: 14
};

export interface Card {
  suit: Suit;
  rank: Rank;
}

export interface Player {
  id: number;
  name: string;
  hand: Card[];
  tricksWon: Trick[];
  consecutiveWins: number;
  isPartyA: boolean; // Players are in two parties
}

export interface Trick {
  cards: { player: Player, card: Card }[];
  leadingSuit?: Suit;
}

export interface GameState {
  players: Player[];
  deck: Card[];
  trumpSuit?: Suit;
  currentPlayerIndex: number;
  currentTrick: Trick;
  trickStreak: Card[];
  lastTrickWinnerId?: number;
  roundNumber: number;
  partyARoundScore: number;
  partyBRoundScore: number;
  partyAMatchScore: number;
  partyBMatchScore: number;
  gamePhase: 'dealing' | 'choosing_trump' | 'playing' | 'round_over' | 'game_over';
  message: string;
  trumpSuitForDisplay?: Suit | null;
  streakHolder?: { name: string, party: 'A' | 'B' };
}
