import { getAllPosts } from "@/service/posts";
import FilterablePosts from "../components/FilterablePosts";

export default async function PostsPage() {
  //일단 모든 포스트를 가져온다.
  const posts = await getAllPosts();

  //카테고리 이름이 필요한데, 이걸 하드코딩으로 넣지 말고, set(중복불가)을 이용해서 넣기
  //카테고리가 추가되거나 빠질 수 있으니까. 자동으로 넣어야 나중에 수정이 편리하겠지?
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
