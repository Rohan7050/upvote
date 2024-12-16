export type ArticleData = {
    id: number;
    title: string;
    desc: string;
    upvotes: number;
    date: string;
    image: string;
}

export type SortByType = "DATE" | "VOTE" | "";