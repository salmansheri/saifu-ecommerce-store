export async function getCategories() {
  const response = await fetch(
    "http://localhost:3000/api/store/64fdca8555524d5815004cd4/categories",
    { cache: "no-cache" }
  );
  return await response.json();
}
