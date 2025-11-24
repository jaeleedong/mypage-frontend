export type Post = {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    tags: string[];
    createdAt: string;
};

export const testData: Post[] = [
    {
        id: 1,
        title: "React ggg",
        excerpt: "test 111111 아아아아",
        category: "개발",
        tags: ["React","Vite","Tailwind"],
        createdAt: "2025-11-11",
    },
    {
        id: 2,
        title: "picture",
        excerpt: "test 2222 dd",
        category: "사진",
        tags: ["사진","일상"],
        createdAt: "2025-11-13",
    },
    {
        id: 3,
        title: "정리",
        excerpt: "test 33333 !@#.",
        category: "기록",
        tags: ["기록","공부"],
        createdAt: "2025-11-11",
    }
];