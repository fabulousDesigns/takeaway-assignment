/**
 * This script is responsible for loading book data from JSON files into our app.
 * It's like a librarian who knows exactly where to find every book in the library.
 *
 * Here's how it works:
 * - We start by importing two essential tools: `fs` (File System) and `path`. `fs` helps us read files, while `path` ensures we know exactly where those files are located.
 * - We then define a special object called `bookData`. This object will hold all the book information we load from our JSON files.
 * - For each book, we do the following:
 *   - Use `path.join` to figure out the exact location of the book's JSON file. This is done relative to the current directory (`__dirname`) and goes up one level to the `resources` folder.
 *   - Read the contents of the JSON file using `fs.readFileSync`. This reads the file synchronously, meaning it stops everything else until it finishes reading the file. We tell it to interpret the file as UTF-8 encoded text.
 *   - Parse the JSON content into a JavaScript object using `JSON.parse`. This turns the raw JSON data into something our app can work with.
 * - Finally, we export the `bookData` object. Now, whenever our app needs to know about a book, it can simply ask `bookData` for the information.
 */

const fs = require("fs");
const path = require("path");

/**
 * Loads book data from JSON files.
 * @returns {Object} An object containing book data loaded from JSON files.
 */
const bookData = {
  a_color_of_his_own: JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../resources/a_color_of_his_own.json"),
      "utf8"
    )
  ),
  fishing_in_the_air: JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../resources/fishing_in_the_air.json"),
      "utf8"
    )
  ),
};

/**
 * Exports the loaded book data so it can be used throughout our app.
 * @exports {Object}
 */
module.exports = bookData;
