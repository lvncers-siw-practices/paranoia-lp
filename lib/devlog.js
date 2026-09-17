export const devlogPosts = [
  {
    slug: "2026-09-17-hello",
    title: "LP公開しました",
    date: "2026-09-17",
    excerpt: "Paranoiaの開発状況を追える場所を作りました。",
    body: (
      <>
        <p>「Paranoia」の開発情報をまとめて追えるページを公開しました。</p>
        <p>現在は開発初期段階です。直近の目標は次の通りです。</p>
        <ul>
          <li>監視5地点・異常10種類程度で6分間の1ステージを遊べるようにする</li>
          <li>ランごとに異常の組み合わせが変わるローグライク部分を固める</li>
          <li>itch.ioでのアルファ版限定公開</li>
        </ul>
        <p>進捗があるたびに、このdevlogに追記していきます。</p>
      </>
    ),
  },
];

export function getAllDevlogPosts() {
  return [...devlogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllDevlogSlugs() {
  return devlogPosts.map((post) => post.slug);
}

export function getDevlogPost(slug) {
  return devlogPosts.find((post) => post.slug === slug);
}
