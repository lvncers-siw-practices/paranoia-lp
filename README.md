# Paranoia LP

「Paranoia」（2Dローグライク監視ゲーム）の公式ランディングページ＆devlog。
Next.js (App Router) 製の静的サイトで、Vercelへのデプロイを前提にしている。

## ローカルで動かす

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できる。

## Devlogの更新方法

`lib/devlog.js` の `devlogPosts` 配列にオブジェクトを1つ追加するだけ。Markdownではなく、そのままJSXで本文を書く。

```jsx
{
  slug: "2026-09-20-alpha-update", // URLの /devlog/<slug> になる
  title: "記事タイトル",
  date: "2026-09-20",
  excerpt: "一覧に出す一言サマリー（任意）",
  body: (
    <>
      <p>本文はここに直接JSXで書く。</p>
      <ul>
        <li>箇条書きもそのままJSXタグで</li>
      </ul>
    </>
  ),
},
```

配列に足したら `git add` → `git commit` → `git push` するだけで、devlog一覧・個別ページ・トップページの最新3件に反映され、Vercelに接続していれば自動デプロイされる。

## Vercelへのデプロイ

1. [vercel.com](https://vercel.com) にログインし、「Add New Project」からこのリポジトリ（`lvncers-siw-practices/paranoia-lp`）をImportする
2. フレームワークは自動でNext.jsと検出される。ビルド設定は変更不要
3. Deployを押せば完了。以降は `main` ブランチにpushするたびに自動で再デプロイされる

## 未設定のリンク

`app/page.js` の itch.io / Steam / X(Twitter) は現時点でリンク先が無いため、無効化した表示（「準備中」）にしてある。URLが決まったら通常の `<a>` リンクに差し替える。
