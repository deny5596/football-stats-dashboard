/**
 * @generated SignedSource<<bdc67289157786858f394043bbff519c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TopPlayersForChartQuery$variables = Record<PropertyKey, never>;
export type TopPlayersForChartQuery$data = {
  readonly topPlayersForChart: {
    readonly topAssists: ReadonlyArray<{
      readonly assists: number;
      readonly goals: number;
      readonly id: string;
      readonly name: string;
    }>;
    readonly topGoals: ReadonlyArray<{
      readonly assists: number;
      readonly goals: number;
      readonly id: string;
      readonly name: string;
    }>;
  };
};
export type TopPlayersForChartQuery = {
  response: TopPlayersForChartQuery$data;
  variables: TopPlayersForChartQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "goals",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "assists",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TopPlayersForChartQuery",
    "kind": "LinkedField",
    "name": "topPlayersForChart",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PlayerChartData",
        "kind": "LinkedField",
        "name": "topGoals",
        "plural": true,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PlayerChartData",
        "kind": "LinkedField",
        "name": "topAssists",
        "plural": true,
        "selections": (v0/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TopPlayersForChartQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TopPlayersForChartQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e1c6e6ef7f7c5c2df614fb5dda8358da",
    "id": null,
    "metadata": {},
    "name": "TopPlayersForChartQuery",
    "operationKind": "query",
    "text": "query TopPlayersForChartQuery {\n  topPlayersForChart {\n    topGoals {\n      id\n      name\n      goals\n      assists\n    }\n    topAssists {\n      id\n      name\n      goals\n      assists\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e7da0d7796cf757cf247f17dca15fca5";

export default node;
