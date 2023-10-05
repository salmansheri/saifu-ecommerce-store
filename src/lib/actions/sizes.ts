export async function getSizes() {
  const response = await fetch(
    "http://localhost:3000/api/store/64fdca8555524d5815004cd4/sizes",
    { cache: "no-cache" }
  );

  return response.json();
}
