package db

import (
	"database/sql"
	"fmt"
	"time"

	// Postgres driver registers itself with database/sql
	_ "github.com/lib/pq"

	"github.com/Nysonn/shopping-cart-project/internal/config"
)

// NewPostgresDB opens a database connection pool using the provided config.
// It returns a *sql.DB you can use throughout your app.
func NewPostgresDB(cfg *config.Config) (*sql.DB, error) {
	// 1. Build the connection string (DSN)
	//    sslmode=disable is okay for local development; enable SSL in production.
	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		cfg.DBHost, cfg.DBPort, cfg.DBUser, cfg.DBPassword, cfg.DBName,
	)

	// 2. Open a sql.DB. This does NOT establish any connections yet.
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		return nil, fmt.Errorf("sql.Open: %w", err)
	}

	// 3. Configure connection pool settings.
	//    Adjust based on your expected load.
	db.SetMaxOpenConns(25)                 // max open connections to the database
	db.SetMaxIdleConns(25)                 // max idle connections in the pool
	db.SetConnMaxIdleTime(5 * time.Minute) // connections idle for >5m will be closed
	db.SetConnMaxLifetime(1 * time.Hour)   // connections live for >1h will be closed

	// 4. (Optional) Ping the database to verify the DSN is valid.
	//    You can do this in main.go as well, but including it here is fine.
	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("db.Ping: %w", err)
	}

	return db, nil
}
