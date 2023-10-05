export async function getSizes() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_APPLICATION_URL}/sizes`,
    { cache: "no-cache" }
  );

  return response.json();
}
