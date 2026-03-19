package handlers

import (
	"encoding/json"
	"library/data"
	"library/models"
	"net/http"
)

func GetAllProducts(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(data.Products)
}

func JustGet(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNoContent)
}

func GetProductsByType(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	category := query.Get("type")
	if category == "" {
		http.Error(w, "Не введены query", http.StatusBadRequest)
		return
	}
	if category == "all" {
		json.NewEncoder(w).Encode(data.Products)
		return

	}
	var filteredProducts []models.Product
	for _, product := range data.Products {
		if product.Type == category {
			filteredProducts = append(filteredProducts, product)
		}
	}
	json.NewEncoder(w).Encode(filteredProducts)

}
