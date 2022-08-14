import Document, { Html, Head, Main, NextScript } from 'next/document';

const bodyStyle = {
  margin: 0,
  padding: 0,
  height: '100%',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif',
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={"zh"}>
        <Head />
        <body style={bodyStyle}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
