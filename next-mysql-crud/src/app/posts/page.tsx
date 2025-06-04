import { getPosts } from "@/services/posts";
import PostItem from "@/components/posts/PostItem";
import CreateForm from "@/components/posts/CreateForm";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="mx-auto w-full max-w-5xl space-y-5">
      <div>
        <h2 className="text-2xl font-semibold">Create Post</h2>
        <CreateForm />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">All Posts</h2>
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
