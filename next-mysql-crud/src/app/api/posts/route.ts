import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export type PostType = {
  id: number;
  title: string;
  body: string;
  author: string;
  created_at: string;
};

// GET all posts
export async function GET() {
  try {
    const posts: PostType[] = await pool.query("SELECT * FROM posts");

    if (posts.length === 0) {
      return NextResponse.json({ message: "No posts found" }, { status: 404 });
    }

    return NextResponse.json(posts);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error occurred: ", error },
      { status: 500 }
    );
  }
}

// CREATE a new post
export async function POST(request: Request) {
  try {
    const { title, body } = await request.json();

    if (!title || !body) {
      return NextResponse.json(
        { message: "Title and body are required" },
        { status: 400 }
      );
    }

    const response = (await pool.query(
      "INSERT INTO posts (title, body) VALUES (?, ?)",
      [title, body]
    )) as { insertId: number };

    return NextResponse.json(
      {
        message: "Post created successfully",
        postId: response.insertId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error occurred: ", error },
      { status: 500 }
    );
  }
}
