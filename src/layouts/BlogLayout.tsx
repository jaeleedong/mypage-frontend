type BlogLayoutProps = {
    children: React.ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-50">
            <header className="border-b border-slate-800">
                <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
                    <div className="font-semibold text-lg">
                        myblog<span className="text-sky-400">.</span>
                    </div>
                    <nav className="flex gap-4 text-sm text-slate-300">
                        <button className="hover:text-sky-400">블로그</button>
                        <button className="hover:text-sky-400">사진</button>
                        <button className="hover:text-sky-400">소개</button>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-4xl px-4 py-8">
                {children}
            </main>

            <footer className="border-t border-slate-800">
                <div className="mx-auto max-w-4xl px-4 py-4 text-xs text-slate-500">
                    {new Date().getFullYear()} myblog. All rights reserved
                </div>
                </footer>
        </div>
    );
}