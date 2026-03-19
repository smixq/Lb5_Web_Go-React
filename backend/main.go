package main

import (
	"library/handlers"
	"library/middlewere"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("img"))
	http.Handle("/imgs/", http.StripPrefix("/imgs", fs))
	http.Handle("/Products/all", middlewere.EnableCors(http.HandlerFunc(handlers.GetAllProducts)))
	http.Handle("/Products", middlewere.EnableCors(http.HandlerFunc(handlers.GetProductsByType)))
	http.ListenAndServe(":8080", nil)

}
