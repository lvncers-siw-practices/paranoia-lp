import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllDevlogSlugs, getDevlogPost } from "@/lib/devlog";

export function generateStaticParams() {
  return getAllDevlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  try {
    const post = getDevlogPost(params.slug);
    return { title: `${post.title} | Paranoia Devlog` };
  } catch {
    return {};
  }
}

export default function DevlogPostPage({ params }) {
  let post;
  try {
    post = getDevlogPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className="devlog-post">
      <Link href="/devlog" className="back-link">
        ← Devlog一覧
      </Link>
      <time>{post.date}</time>
      <h1>{post.title}</h1>
      <div
        className="devlog-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  );
}
