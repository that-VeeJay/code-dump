import type { Post } from "@/types/post";

export default function PostItem({ post }: { post: Post }) {
  return (
    <div className=" mb-3 p-5 rounded-lg">
      <h3>
        <span className="font-bold">Title:</span> {post.title}
      </h3>
      <h2>
        <span className="font-bold">Body:</span> {post.body}
      </h2>
    </div>
  );
}
