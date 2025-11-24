import type { Post } from "../../data/testData";

type PostCardProps = {
    post: Post;
};

export default function PostCard({ post }: PostCardProps) {
    return (
        <article className="rounded-x1 border bg-white/5 p-4 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb2">
                <span className="px-2 py-1 rounded-full bg-slate-800 text-slate-100">
                    {post.category}
                </span>
                <time>{post.createdAt}</time>
            </div>

            <h2 className="text-lg font-semibold text-slate-50 mb-2">
                {post.title}
            </h2>

            <p className="text-sm text-slate-300 mb-3">
                {post.excerpt}
            </p>

            <div className="flex-wrap gap-2 text-xs text-slate-300">
                {post.tags.map((tag) => (
                    <span
                    key={tag}
                    className="px-2 py-1 rouneded-full border border-slate-700"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </article>
    )
}