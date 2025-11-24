import type { Post } from "../../data/testData";
import PostCard from "./PostCard";

type PostListProps = {
    posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
    if (posts.length === 0) {
        return (
            <p className="text-sm text-slate-400">
                작성된 글 없음.
            </p>
        );
    }

return (
    <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}
    </div>
    );
}