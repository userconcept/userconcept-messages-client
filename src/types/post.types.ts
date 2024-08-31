export type Post = {
    id: number;
    title: string;
    text: string;
    images: string[];
    author: {
        username: string;
    }
}
