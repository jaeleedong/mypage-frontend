import { testData } from "../data/testData";
import PostList from "../components/blog/PostList";

export default function BlogHomePage() {
    const posts = testData;

    return (
        <section className='space-y-6'>
            <header className="space-y-2">
                <h1 className="test-3xl font-bold">
                    블로그
                </h1>
                <p className="text-sm text-slate-400">
                    사진, 기록을 모아두는 공간
                </p>
            </header>
        <PostList posts={posts} />
        </section>
    );
}