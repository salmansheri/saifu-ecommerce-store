export async function getProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_APPLICATION_URL}/products`,
    { cache: "no-cache" }
  );

  return response.json();
}

export async function getProductById(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_APPLICATION_URL}/products/${id}`,
    { cache: "no-cache" }
  );

  return response.json();
}
export async function getSearchProducts(query: string) {
  const response = await fetch(
    `https://saifu-ecommerce-admin.vercel.app/api/search?query=${query}`,
    {
      cache: "no-cache",
    }
  );

  return response.json();
}
