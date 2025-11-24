type BlogLayoutProps = {
    children: React.ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <div className="min-h-screen min-w-full bg-slate-900 text-slate-50">

            <header
                className="w-[1200px] h-[300px] mx-auto border-b border-slate-300 bg-[size:100%_100%]"
                style={{
                    backgroundImage: "url('/images/main-banner.jpg')",
                }}
            >
                <div className="h-full items-center px-4">
                    <div className="font-semibold text-lg text-white">
                        myblog<span className="text-sky-400">.</span>
                    </div>
                </div>
            </header>

            <main className="w-[1200px] px-4 py-8">
                {/*{children}*/}
                <div className="h-[1500px] bg-white text-gray-800 border border-dashed border-gray-400 p-4 mt-8">
                    테스트 콘텐츠 (스크롤 확인용)
                </div>
            </main>

            <footer className="mx-auto w-[1200px] border-t border-slate-300 bg-slate-900">
                <div className="px-4 py-4 text-xs text-slate-500">
                    {new Date().getFullYear()} myblog. All rights reserved
                </div>
            </footer>
        </div>
    );
}