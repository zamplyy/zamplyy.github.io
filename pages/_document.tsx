import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="sv-se">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&family=Knewave&family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&family=Knewave&family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&display=swap"
            rel="stylesheet"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&family=Knewave&family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&display=swap"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
