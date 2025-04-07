export type User = {
  id: string;
  name?: string;
  username: string;
  password: string;
  role: "admin" | "viewer";
};

export type TokenUser = Partial<User>;

export type Player = {
  id: number;
  name: string;
  jerseyNumber: string;
  club: string;
  position: string;
  nationality: string;
  age: number;
  appearances: number;
  wins: number;
  losses: number;
  goals: number;
  goalsPerMatch: number;
  headedGoals: number;
  goalsWithRightFoot: number;
  goalsWithLeftFoot: number;
  penaltiesScored: number;
  freekicksScored: number;
  shots: number;
  shotsOnTarget: number;
  shootingAccuracy: number;
  hitWoodwork: number;
  bigChancesMissed: number;
  cleanSheets: number;
  goalsConceded: number;
  tackles: number;
  tackleSuccess: number;
  lastManTackles: number;
  blockedShots: number;
  interceptions: number;
  clearances: number;
  headedClearance: number;
  clearancesOffLine: number;
  recoveries: number;
  duelsWon: number;
  duelsLost: number;
  successful5050s: number;
  aerialBattlesWon: number;
  aerialBattlesLost: number;
  ownGoals: number;
  errorsLeadingToGoal: number;
  assists: number;
  passes: number;
  passesPerMatch: number;
  bigChancesCreated: number;
  crosses: number;
  crossAccuracy: number;
  throughBalls: number;
  accurateLongBalls: number;
  saves: number;
  penaltiesSaved: number;
  punches: number;
  highClaims: number;
  catches: number;
  sweeperClearances: number;
  throwOuts: number;
  goalKicks: number;
  yellowCards: number;
  redCards: number;
  fouls: number;
  offsides: number;
};

export type ParsedPlayer = Partial<Player>;

export interface PlayerTableProps {
  players: Player[];
}
