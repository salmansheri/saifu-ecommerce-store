export async function getCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_APPLICATION_URL}/categories`,
    { cache: "no-cache" }
  );
  return await response.json();
}
