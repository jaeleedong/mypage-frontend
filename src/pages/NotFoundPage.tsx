import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="py-24 text-center space-y-4">
            <p className="text-sm font-medium text-slate-500">404</p>
            <h1 className="text-2xl font-semibold">페이지를 찾을 수 없어요</h1>
            <p className="text-slate-500">주소가 잘못되었거나, 삭제된 페이지일 수 있어요.</p>
            <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-slate-900 text-white mt-3"
            >
                홈으로 돌아가기
            </Link>
        </div>
    );
}
