import Image from "next/image";
import Link from "next/link";
import { getAllDevlogPosts } from "@/lib/devlog";
import screenshotHero from "@/public/screenshot-hero.jpg";

export default function HomePage() {
  const posts = getAllDevlogPosts().slice(0, 3);

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">2D Roguelike Surveillance Game</p>
        <h1>Paranoia</h1>
        <p className="tagline">見るたびに、世界が変わる</p>

        <div className="screenshot-frame">
          <Image
            src={screenshotHero}
            alt="監視モニターに囲まれたデスク。中央の画面には霧の森の小道と人影、手元では報告書に記入している"
            placeholder="blur"
            sizes="(max-width: 720px) 100vw, 720px"
            priority
          />
        </div>

        <div className="cta-row">
          <a
            className="cta"
            href="https://lvncer.itch.io/paranoia-rougelike-observation-2d-alpha"
            target="_blank"
            rel="noopener noreferrer"
          >
            itch.ioで遊ぶ
          </a>
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

      <section className="story">
        <h2>Story</h2>
        <p>
          ロシアのどこか、地図には載らない監視区画。
          あなたは深夜だけそこを見張る契約警備員で、渡された仕事は「設備点検」としか聞かされていない。
        </p>
        <p>
          モニターに映るのは、いつもと変わらないはずの森と、古い小屋と、一本道。
          だが夜が更けるほど、画面の中の何かが少しずつ違って見えはじめる。
        </p>
        <p className="story-hook">見ているつもりで、見られているのかもしれない。</p>
        <p className="story-note">世界観の詳細は開発中。devlogで少しずつ公開していきます。</p>
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
