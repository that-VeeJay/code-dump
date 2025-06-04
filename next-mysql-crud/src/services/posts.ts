import type { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  return response.json();
}

export async function createPost(data: { title: string; body: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create post");
  }
  return response.json();
}
