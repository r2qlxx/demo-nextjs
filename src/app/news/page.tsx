import MaxWidthContainer from "@/components/MaxWidthContainer";
import NewsCard from "@/components/NewsCard";

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts.");
  }
  const data = await res.json();
  return data;
}

const News = async () => {
  const posts: Post[] = await fetchPosts();

  return (
    <MaxWidthContainer>
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl">News</h1>
        {posts.map(post =>
          <NewsCard key={post.id} post={post} />
        )}
      </div>
    </MaxWidthContainer>
  )
}
export default News