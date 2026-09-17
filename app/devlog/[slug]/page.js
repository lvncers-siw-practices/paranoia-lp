import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllDevlogSlugs, getDevlogPost } from "@/lib/devlog";

export function generateStaticParams() {
  return getAllDevlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getDevlogPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Paranoia Devlog` };
}

export default async function DevlogPostPage({ params }) {
  const { slug } = await params;
  const post = getDevlogPost(slug);
  if (!post) notFound();

  return (
    <main className="devlog-post">
      <Link href="/devlog" className="back-link">
        ← Devlog一覧
      </Link>
      <time>{post.date}</time>
      <h1>{post.title}</h1>
      <div className="devlog-body">{post.body}</div>
    </main>
  );
}
