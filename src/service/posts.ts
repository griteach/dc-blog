import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

//post.category와 같은 카테고리가 들어오면 배열로 만들기
export async function getCategoryPosts(category: string): Promise<Post[]> {
  return getAllPosts().then((posts) =>
    posts.filter((post) => {
      if (post.category === category) {
        return post;
      }
    })
  );
}

//포스트를 다 불러온다..
//db로 연결되겠지 여기가?
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
