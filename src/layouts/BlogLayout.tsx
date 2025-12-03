import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-[#f7f5f2] text-slate-900">
            {/* 헤더 */}
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
                <div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-4 text-slate-800">
                    <Link to="/" className="font-semibold tracking-tight text-slate-600">
                        이동재ㅐㅐㅐㅐㅐㅐ아아아
                    </Link>
                    <nav className="flex gap-4 text-sm text-slate-600 [&_a]:text-slate-600">
                        <Link to="/">Home</Link>
                        {/* <Link to="/about">About</Link> */}
                    </nav>
                </div>
            </header>

            {/* 메인 컨텐츠 */}
            <main className="flex-1">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <Outlet />
                </div>
            </main>

            {/* 푸터 */}
            <footer className="border-t border-slate-200 bg-white/80">
                <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 text-center">
                    © {new Date().getFullYear()} My Daily Life
                </div>
            </footer>
        </div>
    );
}
