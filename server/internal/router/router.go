package router

import (
	"net/http"

	"github.com/Nysonn/shopping-cart-project/internal/handler"
)

// NewRouter sets up all application routes and returns an http.Handler.
// We use http.ServeMux from the standard library for simplicity.
func NewRouter(productHandler *handler.ProductHandler) http.Handler {
	mux := http.NewServeMux()

	// Serve image files from the React app's src/assets folder.
	// Adjust the path "../src/assets" if your directory structure differs.
	mux.Handle(
		"/assets/",
		http.StripPrefix(
			"/assets/",
			http.FileServer(http.Dir("./assets")), // Changed from "../src/assets"
		),
	)

	// Route for fetching all products
	mux.HandleFunc("/api/products", productHandler.GetProducts)

	// Health check endpoint
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok"))
	})

	return mux
}
