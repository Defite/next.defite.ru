import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const shouldRenderScripts =
      this.props.unstable_runtimeJS || process.env.NODE_ENV !== "production";

    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Source+Sans+Pro:wght@700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          {shouldRenderScripts ? <NextScript /> : null}
        </body>
      </Html>
    );
  }
}
