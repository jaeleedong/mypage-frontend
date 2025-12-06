import {MessageSquare, Phone, Mail, AppWindowMac} from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogHomePage() {
    const categories = [
        {
            label: "사진 기록",
            img: "../images/6.jpg",

        },
        {
            label: "생각 기록",
            img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
        },
        {
            label: "독서 기록",
            img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop",
            // img: "../images/4.jpg",
        },
        {
            label: "여행 기록",
            img: "../images/3.jpg",
        },
    ];

    return (
        <div className="space-y-10">


            {/* 아래 내용: 카테고리 + 연락처 */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* 카테고리 4개 */}
                <div className="lg:col-span-8 space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map((c) => (
                            <Link
                                key={c.label}
                                to={`/category/${c.type}`}   // ← 클릭하면 카테고리 페이지 이동
                                className="group text-center block"
                            >
                                <div className="rounded-2xl overflow-hidden bg-white shadow-sm transition shadow-slate-200">
                                    <img
                                        src={c.img}
                                        alt={c.label}
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <p className="mt-3 text-sm md:text-base text-slate-700 group-hover:text-slate-900 transition">
                                    {c.label}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 연락처 카드 */}
                <aside className="lg:col-span-4 lg:border-l flex flex-col justify-center pl-8">
                    <ul className="space-y-2 text-slate-700 text-sm md:text-base">
                        <li className="flex items-center gap-3">
                            <MessageSquare className="w-5 h-5 text-slate-600" />
                            <span>@jaeleedong</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-slate-600" />
                            <span>+123-456-7890</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-slate-600" />
                            <span>abcd@naver.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <AppWindowMac className="w-5 h-5 text-slate-600" />
                            <span>이동재</span>
                        </li>

                    </ul>
                </aside>
            </section>
        </div>
    );
}