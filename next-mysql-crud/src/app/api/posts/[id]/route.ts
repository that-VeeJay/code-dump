import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { PostType } from "../route";

// GET SINGLE POST
export async function GET(
  _response: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = Number(params.id);

    const post: PostType[] = await pool.query(
      "SELECT * FROM posts WHERE id = ?",
      [postId]
    );

    if (post.length === 0) {
      return NextResponse.json(
        {
          message: `Post with the ID of ${postId} not found`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(post[0]);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error occurred: ", error },
      { status: 500 }
    );
  }
}

// DELETE POST
export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = Number(params.id);

    const response = (await pool.query("DELETE FROM posts WHERE id = ?", [
      postId,
    ])) as {
      affectedRows: number;
    };

    if (response.affectedRows == 0) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error occurred: ", error },
      { status: 500 }
    );
  }
}

// UPDATE POST
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = Number(params.id);
    const { title, body } = await request.json();

    const response = (await pool.query(
      "UPDATE posts SET title = COALESCE(?, title), body = COALESCE(?, body) WHERE id = ?",
      [title ?? null, body ?? null, postId]
    )) as {
      affectedRows: number;
    };

    if (response.affectedRows === 0) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Post updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error occurred: ", error },
      { status: 500 }
    );
  }
}
