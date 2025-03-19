import BlogList from "@/components/blog/BlogList";
import { getBlogPosts } from "@/lib/firebase/blog";

export const metadata = {
  title: "ブログ記事一覧",
  description:
    "技術ブログの記事一覧ページです。プログラミングや開発に関する情報を掲載しています。",
  path: "/blog",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">ブログ記事一覧</h1>
      <BlogList posts={posts} />
    </div>
  );
}
