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

`content/devlog/` に Markdown ファイルを1つ追加するだけで、devlog一覧・個別ページ・トップページの最新3件に自動で反映される。ビルドやコードの変更は不要。

ファイル名は `YYYY-MM-DD-slug.md` の形式を推奨（URLの `/devlog/<ファイル名>` になる）。

```markdown
---
title: "記事タイトル"
date: "2026-09-20"
excerpt: "一覧に出す一言サマリー（任意）"
---

本文はここにMarkdownで書く。
```

追加したら `git add` → `git commit` → `git push` するだけで、Vercelに接続していれば自動デプロイされる。

## Vercelへのデプロイ

1. [vercel.com](https://vercel.com) にログインし、「Add New Project」からこのリポジトリ（`lvncers-siw-practices/paranoia-lp`）をImportする
2. フレームワークは自動でNext.jsと検出される。ビルド設定は変更不要
3. Deployを押せば完了。以降は `main` ブランチにpushするたびに自動で再デプロイされる

## 未設定のリンク

`app/page.js` の itch.io / Steam / X(Twitter) は現時点でリンク先が無いため、無効化した表示（「準備中」）にしてある。URLが決まったら通常の `<a>` リンクに差し替える。
