import type { Product } from "../Models/Product"

export async function FetchProducts() {
    var url = "http://localhost:8080/Products"
    const response = await fetch(url)
    if (!response.ok) {
        throw Error("Не удолось получить данне")
    }

    const data: Product[] = await response.json()
    return data
}
type Categorys = "all" | "electric" | "bass" | "acoustic" | "accessory"

export async function FetchProductsByType(category: Categorys) {
    var url = "http://localhost:8080/Products"
    const response = await fetch(`${url}?type=${category}`)
    if (!response.ok) {
        throw Error("Не удалось получить данные")
    }
    const data: Product[] = await response.json()
    return data

}