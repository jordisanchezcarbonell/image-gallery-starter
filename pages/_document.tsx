import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Explore the anime-style gallery of Jordi Sánchez featuring high-quality illustrations and videos. Creativity, style, and personality in every frame."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Discover the anime-style world of Jordi Sánchez through photos, videos, and visual highlights."
          />
          <meta
            property="og:title"
            content="Jordi Sánchez Gallery | Anime-Inspired Photos & Videos"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Jordi Sánchez Gallery | Anime-Inspired Photos & Videos"
          />
          <meta
            name="twitter:description"
            content="Explore photos and videos of Jordi Sánchez in anime style."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
