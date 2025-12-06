import { useParams } from "react-router-dom";

const categoryTitles: Record<string, string> = {
    life: "사진 기록",
    thought: "생각 기록",
    books: "독서 기록",
    travel: "여행 기록",
};

export default function CategoryPage() {
    const { type } = useParams(); // URL: /category/:type

    const title = type ? categoryTitles[type] : "카테고리";

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-slate-600">
                {title} 페이지입니다. 여기에 사진 기록, 갤러리, 글 목록 등을 넣으면 됩니다.
            </p>

            <div className="rounded-2xl bg-white shadow p-10 text-center text-slate-500">
                카테고리 콘텐츠 영역
            </div>
        </div>
    );
}