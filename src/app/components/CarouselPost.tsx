import { getNonFeaturedPosts } from "@/service/posts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function Youmaylike() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
