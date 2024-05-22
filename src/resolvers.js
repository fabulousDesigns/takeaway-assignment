/**
 * This script is all about setting up how our app will find books.
 * It uses a simple lookup system based on book titles.
 *
 * First, we import some pre-existing book data from another file. Imagine this data as a library full of books.
 *
 * Next, we define a set of rules (or "resolvers") for finding specific books. Here's how it works:
 * - When someone wants to find a book, they give us a title.
 * - We take that title and clean it up a bit: we replace any spaces with underscores and convert everything to lowercase. This makes sure our search is case-insensitive and handles titles with extra spaces well.
 * - Then, we try to find a book in our data that matches this cleaned-up title. If we find a match, we return that book. If not, we say "nope, no such book found."
 *
 * Finally, we export these rules so other parts of our app can use them to find books.
 */

const bookData = require("./data");

/**
 * Resolves how to find a book by its title.
 * @param {Object} args - An object containing the title of the book to find.
 * @param {string} args.title - The title of the book.
 * @returns {Object|null} The book object if found, otherwise null.
 */
const resolvers = {
  book: ({ title }) =>
    bookData[title.replace(/\s+/g, "_").toLowerCase()] || null,
};

/**
 * Exports the resolvers so they can be used throughout our app.
 * @exports {Object}
 */
module.exports = resolvers;
