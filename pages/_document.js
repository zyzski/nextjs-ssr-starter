import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #fff;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    color: #555;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  select::-ms-expand {
    display: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  strong {
    color: #333;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/* Output the styled component tags in the head  */}
          {this.props.styleTags}

          {/* Add global styles */}
          <GlobalStyles />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
