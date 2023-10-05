export async function getColors() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_APPLICATION_URL}/colors`,
    { cache: "no-cache" }
  );

  return response.json();
}
