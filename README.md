## Book GraphQL Server

This project is a GraphQL server that provides information about books. It allows you to query book data, including the title, author, pages, and page tokens. The server is built using Node.js, Express, and GraphQL.

### Getting Started

To get started with the Book GraphQL Server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-graphql-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd book-graphql-server
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and add the following environment variables:

   ```
   NODE_ENV=development
   PORT=5000
   ```

5. Start the server:

   ```bash
   npm run start
   ```

   You should see the following output in the console:

   ```
   Server is running on http://localhost:5000/graphql
   GraphQL Playground is available at http://localhost:5000/playground
   ```

6. Open your web browser and navigate to `http://localhost:5000/playground` to access the GraphQL Playground.

### Running with Docker

You can also run the Book GraphQL Server using Docker. Follow these steps:

1. Make sure you have Docker installed on your machine.

2. Build the Docker image:

   ```bash
   docker build -t takeaway-assignment:v1 .
   ```

3. Run the Docker container:

   ```bash
   docker run -p 5000:5000 --name book-graphql-server-app takeaway-assignment:v1 -d
   ```

   This command maps the container's port 5000 to the host's port 5000.

4. You should see the following output in the console after running this command:
   `docker logs book-graphql-server-app`

  *OUTPUT*:
   ```
   Server is running on http://localhost:5000/graphql
   GraphQL Playground is available at http://localhost:5000/playground
   ```

5. Open your web browser and navigate to `http://localhost:5000/playground` to access the GraphQL Playground.

### Sample Query

Here's a sample query to retrieve information about the book `A Color of His Own`:

```graphql
query {
  book(title: "A Color of His Own") {
    title
    author
    pages {
      pageIndex
      content
      tokens {
        value
        position
      }
    }
  }
}
```

This query will return the book's title, author, and pages, including the content and tokens for each page.

### Project Structure

- `index.js`: The main entry point of the application, where the Express server is configured and started.
- `src/schema.js`: Contains the GraphQL schema definition for the Book type and related types.
- `src/resolvers.js`: Implements the resolver functions for the GraphQL queries.
- `src/data.js`: Handles loading and managing the book data from JSON files.
- `resources/`: Directory containing the JSON files with book data.
- `Dockerfile`: Defines the Docker image used by the application.

### Dependencies

- `express`
- `graphql`
- `graphql-http`: 
- `ruru`
- `dotenv`
- `nodemon`


