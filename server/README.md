# E-Commerce Go Backend

A minimal Go backend for an e-commerce React client, serving product data via a RESTful API. Built with vanilla Go, PostgreSQL, and SQLC for type-safe database access.

## Prerequisites

* Go (>= 1.20) installed: [https://go.dev/doc/install](https://go.dev/doc/install)
* PostgreSQL database (local or remote)
* `sqlc` CLI installed:

  ```bash
  go install github.com/kyleconroy/sqlc/cmd/sqlc@latest
  ```

## Configuration

Create environment variables for database connection and server port. For example, in a `.env` file:

Load these into your shell (e.g., using `direnv` or running `export $(cat .env | xargs)`).

## Generate Go Code with SQLC

From the project root, run:

```bash
sqlc generate
```

This reads `db/schema/*.sql` and `db/queries/*.sql`, then writes type-safe Go code into `internal/db`.

## Running the Server

1. Build or run directly:

   ```bash
   go run cmd/server/main.go
   ```
2. The server listens on the port defined by `SERVER_PORT` (e.g., `:8080`).

## API Endpoints

* `GET /api/products`: Returns a JSON array of products:

  ```json
  [
    {
      "id": 1,
      "name": "Organic Apples",
      "category": "Fruit",
      "price": 1000,
      "image_url": "",
      "rating": 4.5,
      "reviews": 24,
      "isOrganic": true
    },
    ...
  ]
  ```
* `GET /healthz`: Health check, returns `ok`.
