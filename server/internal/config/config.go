package config

import (
	"fmt"
	"os"
)

// Config holds all the configurable settings for the application.
// We load these from environment variables to follow 12-factor app principles.
type Config struct {
	DBHost     string // e.g. "localhost"
	DBPort     string // e.g. "5432"
	DBUser     string // e.g. "postgres"
	DBPassword string // e.g. "mysecretpassword"
	DBName     string // e.g. "ecomdb"
	ServerPort string // e.g. "8080"
}

// LoadConfig reads required environment variables and returns a Config struct.
// It returns an error if any required variable is missing.
func LoadConfig() (*Config, error) {
	getEnv := func(key string) (string, error) {
		value := os.Getenv(key)
		if value == "" {
			return "", fmt.Errorf("environment variable %s is required but not set", key)
		}
		return value, nil
	}

	host, err := getEnv("DB_HOST")
	if err != nil {
		return nil, err
	}

	port, err := getEnv("DB_PORT")
	if err != nil {
		return nil, err
	}

	user, err := getEnv("DB_USER")
	if err != nil {
		return nil, err
	}

	pass, err := getEnv("DB_PASSWORD")
	if err != nil {
		return nil, err
	}

	name, err := getEnv("DB_NAME")
	if err != nil {
		return nil, err
	}

	srvPort, err := getEnv("SERVER_PORT")
	if err != nil {
		return nil, err
	}

	return &Config{
		DBHost:     host,
		DBPort:     port,
		DBUser:     user,
		DBPassword: pass,
		DBName:     name,
		ServerPort: srvPort,
	}, nil
}
