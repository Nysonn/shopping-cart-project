package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/joho/godotenv"

	"github.com/Nysonn/shopping-cart-project/internal/config"
	"github.com/Nysonn/shopping-cart-project/internal/db"
	"github.com/Nysonn/shopping-cart-project/internal/handler"
	"github.com/Nysonn/shopping-cart-project/internal/repository"
	"github.com/Nysonn/shopping-cart-project/internal/router"
	"github.com/Nysonn/shopping-cart-project/internal/service"
)

func main() {
	// 1. Load configuration from environment variables
	_ = godotenv.Load()

	cfg, err := config.LoadConfig()
	if err != nil {
		log.Fatalf("cannot load config: %v", err)
	}

	// 2. Initialize the database connection
	pgDB, err := db.NewPostgresDB(cfg)
	if err != nil {
		log.Fatalf("cannot connect to database: %v", err)
	}
	// Optionally, ping to verify connectivity
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := pgDB.PingContext(ctx); err != nil {
		log.Fatalf("cannot ping database: %v", err)
	}

	// 3. Create SQLC queries wrapper
	queries := db.New(pgDB) // New comes from SQLC: returns *db.Queries
	// 4. Wire up repository, service, handler
	prodRepo := repository.NewProductRepo(queries)
	prodSvc := service.NewProductService(prodRepo)
	prodH := handler.NewProductHandler(prodSvc)

	// 5. Set up router
	mux := router.NewRouter(prodH)

	// 6. Start HTTP server
	addr := fmt.Sprintf(":%s", cfg.ServerPort)
	log.Printf("starting server on %s", addr)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatalf("server failed: %v", err)
	}
}
