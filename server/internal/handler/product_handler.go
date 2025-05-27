// internal/handler/product_handler.go
package handler

import (
	"encoding/json"
	"net/http"

	// SQLC-generated types (db.Product)
	"github.com/Nysonn/shopping-cart-project/internal/service" // ProductService interface
)

// ProductHandler holds references to your service layer.
type ProductHandler struct {
	svc service.ProductService
}

// NewProductHandler constructs a new handler with the given service.
func NewProductHandler(svc service.ProductService) *ProductHandler {
	return &ProductHandler{svc: svc}
}

// GetProducts handles GET /api/products
// It calls the service to fetch all products and writes JSON back.
func (h *ProductHandler) GetProducts(w http.ResponseWriter, r *http.Request) {
	// 1. Use the request’s context to propagate cancellation/timeouts.
	ctx := r.Context()

	// 2. Call your service to load products.
	products, err := h.svc.GetAllProducts(ctx)
	if err != nil {
		// 3. If an error occurred, respond with HTTP 500.
		http.Error(w, "Failed to load products", http.StatusInternalServerError)
		return
	}

	// 4. Set the appropriate headers for JSON response.
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	// 5. Encode the slice of db.Product into JSON.
	//    db.Product has JSON tags because sqlc emitted them.
	if err := json.NewEncoder(w).Encode(products); err != nil {
		// 6. If encoding fails, log or handle it (here we send 500).
		http.Error(w, "Failed to encode products", http.StatusInternalServerError)
	}
}
