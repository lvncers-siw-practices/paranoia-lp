import Link from "next/link";
import { getAllDevlogPosts } from "@/lib/devlog";

export const metadata = { title: "Devlog | Paranoia" };

export default function DevlogIndexPage() {
  const posts = getAllDevlogPosts();

  return (
    <main className="devlog-index">
      <h1>Devlog</h1>
      <p className="devlog-index-lead">
        開発の進捗はここに積み上げていきます。追いかければ最新情報がわかるようにする予定です。
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/devlog/${post.slug}`}>
              <time>{post.date}</time>
              <h2>{post.title}</h2>
              {post.excerpt && <p>{post.excerpt}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
