import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const DEVLOG_DIR = path.join(process.cwd(), "content", "devlog");

export function getAllDevlogSlugs() {
  return fs
    .readdirSync(DEVLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getDevlogPost(slug) {
  const filePath = path.join(DEVLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || "",
    html: marked.parse(content),
  };
}

export function getAllDevlogPosts() {
  return getAllDevlogSlugs()
    .map((slug) => getDevlogPost(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
