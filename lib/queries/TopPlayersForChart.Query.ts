import { graphql } from "react-relay";

export const GET_TOP_PLAYERS_CHART_QUERY = graphql`
  query TopPlayersForChartQuery {
    topPlayersForChart {
      topGoals {
        id
        name
        goals
        assists
      }
      topAssists {
        id
        name
        goals
        assists
      }
    }
  }
`;
