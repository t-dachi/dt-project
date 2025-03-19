import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.slug} className="border-b pb-8">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-2xl font-semibold hover:text-blue-600 mb-2">
              {post.title}
            </h2>
          </Link>
          <div className="text-gray-600 mb-4">{post.date}</div>
          <p className="text-gray-700">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
          >
            続きを読む →
          </Link>
        </article>
      ))}
    </div>
  );
}
