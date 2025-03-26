module.exports = {
  artifactDirectory: "./__generated__",
  excludes: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  language: "typescript",
  schema: "./schema/schema.graphql",
  src: "./lib/queries",
};
