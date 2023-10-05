export async function getProducts() {
  const response = await fetch(
    "http://localhost:3000/api/store/650058ac38e9a3075c8604e7/products",
    { cache: "no-cache" }
  );

  return response.json();
}

export async function getProductById(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/store/650058ac38e9a3075c8604e7/products/${id}`,
    { cache: "no-cache" }
  );

  return response.json();
}
export async function getSearchProducts(query: string) {
  const response = await fetch(
    `http://localhost:3000/api/search?query=${query}`,
    { cache: "no-cache" }
  );

  return response.json();
}
