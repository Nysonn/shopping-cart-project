package repository

import (
	"context"

	"github.com/Nysonn/shopping-cart-project/internal/db"
)

// ProductRepo defines the methods our service layer can call.
// We return slices of db.Product (the struct SQLC generated from your schema).
type ProductRepo interface {
	// GetAllProducts fetches all products from the DB.
	GetAllProducts(ctx context.Context) ([]db.Product, error)
}

// sqlcProductRepo is the concrete implementation of ProductRepo
// that uses SQLC's generated Querier interface.
type sqlcProductRepo struct {
	q db.Querier
}

// NewProductRepo constructs a ProductRepo backed by SQLC.
// You pass in the *sqlc.Queries (which implements db.Querier).
func NewProductRepo(q db.Querier) ProductRepo {
	return &sqlcProductRepo{q: q}
}

// GetAllProducts calls SQLC's generated method to retrieve all rows.
func (r *sqlcProductRepo) GetAllProducts(ctx context.Context) ([]db.Product, error) {
	// SQLC generated for the query named GetAllProducts in products.sql
	products, err := r.q.GetAllProducts(ctx)
	if err != nil {
		return nil, err // propagate DB errors up to service/handler
	}
	return products, nil
}
