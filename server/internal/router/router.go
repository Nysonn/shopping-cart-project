package router

import (
	"net/http"

	"github.com/Nysonn/shopping-cart-project/internal/handler"
)

// NewRouter sets up all application routes and returns an http.Handler.
// We use http.ServeMux from the standard library for simplicity.
func NewRouter(productHandler *handler.ProductHandler) http.Handler {
	mux := http.NewServeMux()

	// Route for fetching all products
	mux.HandleFunc("/api/products", productHandler.GetProducts)

	// Health check endpoint
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok"))
	})

	return mux
}
