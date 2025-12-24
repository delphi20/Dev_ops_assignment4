// Always use relative URL - nginx proxies /api/* to the backend
export async function fetchPosts() {
  const response = await fetch("/api/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
}
