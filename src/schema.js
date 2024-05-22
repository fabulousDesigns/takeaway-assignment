/**
 * This script sets up a GraphQL schema for our app. It's like a blueprint for how data should be structured and accessed.
 * We're using the `graphql` package to make this happen.
 *
 * Here's what we've got in our schema:
 * - **Tokens**: These represent pieces of text within a larger body. Each token has a `value` (the actual piece of text) and a `position` (where it sits in the overall text).
 * - **Pages**: Think of these as chapters in a book. Each page has a number (`pageIndex`), some content (`content`), and a list of tokens that appear on that page.
 * - **Books**: These are the main entities. A book has a title, an author, and a collection of pages.
 * - **Queries**: This is where users interact with our data. Right now, there's just one query, `book`, which lets us fetch details about a book by its title.
 *
 * After defining all this, we use the `buildSchema` function to actually create the schema. Then, we export it so other parts of our app can use it.
 */

const { buildSchema } = require("graphql");

/**
 * Builds the GraphQL schema based on our definitions.
 * @returns {Object} The fully constructed GraphQL schema.
 */
const schema = buildSchema(`
  type Token {
    value: String!
    position: [Int!]!
  }

  type Page {
    pageIndex: Int!
    content: String!
    tokens: [Token!]!
  }

  type Book {
    title: String!
    author: String!
    pages: [Page!]!
  }

  type Query {
    book(title: String): Book
  }
`);

/**
 * Exports the schema so it can be used throughout our app.
 * @exports {Object}
 */
module.exports = schema;
