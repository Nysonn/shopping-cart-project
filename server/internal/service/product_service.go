package service

import (
	"context"

	"github.com/Nysonn/shopping-cart-project/internal/repository" // Our repository interface

	"github.com/Nysonn/shopping-cart-project/internal/db" // SQLC-generated package
)

// ProductService defines the business-logic operations available for products.
type ProductService interface {
	// GetAllProducts retrieves every product in the catalog.
	GetAllProducts(ctx context.Context) ([]db.Product, error)
}

// productService is a concrete implementation of ProductService.
type productService struct {
	repo repository.ProductRepo
}

// NewProductService returns a ProductService wired with the given ProductRepo.
// This is where you could inject additional dependencies (e.g. caching layers).
func NewProductService(repo repository.ProductRepo) ProductService {
	return &productService{repo: repo}
}

// GetAllProducts calls through to the repository to load products.
func (s *productService) GetAllProducts(ctx context.Context) ([]db.Product, error) {
	// 1. Use context for deadlines, tracing, and cancellation:
	products, err := s.repo.GetAllProducts(ctx)
	if err != nil {
		return nil, err
	}

	return products, nil
}
