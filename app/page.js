import Link from "next/link";
import { getAllDevlogPosts } from "@/lib/devlog";

export default function HomePage() {
  const posts = getAllDevlogPosts().slice(0, 3);

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">2D Roguelike Surveillance Game</p>
        <h1>Paranoia</h1>
        <p className="tagline">見るたびに、世界が変わる</p>

        <div className="static-box" aria-hidden="true">
          <span className="static-box-label">NO SIGNAL</span>
        </div>

        <div className="cta-row">
          <span className="cta disabled">itch.io（準備中）</span>
          <span className="cta disabled">Steam（準備中）</span>
          <span className="cta disabled">X / Twitter（準備中）</span>
        </div>
      </section>

      <section className="concept">
        <h2>コンセプト</h2>
        <p>
          監視ゲームは、一度異常を覚えると怖くなくなる。ネタバレに弱く、配信されると寿命が縮む。
          Paranoiaは、部屋の構成・異常の組み合わせ・発生条件をランごとに変えるローグライク化で、
          その弱点そのものを壊しにいく2Dの監視ゲームです。
        </p>

        <ul className="loop">
          <li>安心</li>
          <li>違和感</li>
          <li>疑心暗鬼</li>
          <li>発見</li>
          <li>安堵</li>
        </ul>
        <p className="loop-caption">このループが、毎回違う異常で繰り返される。</p>
      </section>

      <section className="devlog-preview">
        <div className="devlog-preview-head">
          <h2>Devlog</h2>
          <Link href="/devlog">すべて見る →</Link>
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/devlog/${post.slug}`}>
                <time>{post.date}</time>
                <span>{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
