export const typeDefs = `#graphql
  enum SortBy {
    GOALS
    ASSISTS
    NAME
  }

  input PlayerFilter {
    club: String
    nationality: String
    position: String
  }

  type Player {
    id: ID!
    name: String
    jerseyNumber: String
    club: String
    position: String
    nationality: String
    age: Int
    appearances: Int
    wins: Int
    losses: Int
    goals: Int
    goalsPerMatch: Float
    headedGoals: Int
    goalsWithRightFoot: Int
    goalsWithLeftFoot: Int
    penaltiesScored: Int
    freekicksScored: Int
    shots: Int
    shotsOnTarget: Int
    shootingAccuracy: Float
    hitWoodwork: Int
    bigChancesMissed: Int
    cleanSheets: Int
    goalsConceded: Int
    tackles: Int
    tackleSuccess: Float
    lastManTackles: Int
    blockedShots: Int
    interceptions: Int
    clearances: Int
    headedClearance: Int
    clearancesOffLine: Int
    recoveries: Int
    duelsWon: Int
    duelsLost: Int
    successful5050s: Int
    aerialBattlesWon: Int
    aerialBattlesLost: Int
    ownGoals: Int
    errorsLeadingToGoal: Int
    assists: Int
    passes: Int
    passesPerMatch: Float
    bigChancesCreated: Int
    crosses: Int
    crossAccuracy: Float
    throughBalls: Int
    accurateLongBalls: Int
    saves: Int
    penaltiesSaved: Int
    punches: Int
    highClaims: Int
    catches: Int
    sweeperClearances: Int
    throwOuts: Int
    goalKicks: Int
    yellowCards: Int
    redCards: Int
    fouls: Int
    offsides: Int
  }

  type PlayerEdge {
    node: Player
    cursor: String!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    currentPage: Int!
    totalPages: Int!
  }

  type PlayerConnection {
    players: [Player]
    pageInfo: PageInfo
  }


  type User {
    id: String
    name: String
    username: String
    password: String
    role: String
  }

  type PlayerChartData {
    id: ID!
    name: String!
    goals: Int!
    assists: Int!
  }

  type TopPlayersChartData {
    topGoals: [PlayerChartData!]!
    topAssists: [PlayerChartData!]!
  }

  type TopPlayersForChartQuery {
    topGoals: [PlayerChartData!]!
    topAssists: [PlayerChartData!]!
  }

  type Query {
    players(
      after: Int
      first: Int
      filter: PlayerFilter
      sortBy: SortBy
    ): PlayerConnection!

    player(id: ID!): Player

    user: User
    topPlayersForChart: TopPlayersChartData!
  }

  type Mutation {
    login(username: String!, password: String!): User
    logout: Boolean
    addPlayer(
      name: String!
      jerseyNumber: Int
      club: String
      position: String
      nationality: String
      age: Int
      appearances: Int
      wins: Int
      losses: Int
      goals: Int
      assists: Int
    ): Player
  }
`;
