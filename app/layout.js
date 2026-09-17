import "./globals.css";

export const metadata = {
  title: "Paranoia — 2D Roguelike Surveillance Game",
  description:
    "見るたびに、世界が変わる。2Dローグライク監視ゲーム「Paranoia」の公式ページ・開発ログ。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <a href="/" className="site-logo">
            PARANOIA
          </a>
          <nav>
            <a href="/">Home</a>
            <a href="/devlog">Devlog</a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>© Paranoia Project</p>
        </footer>
      </body>
    </html>
  );
}
