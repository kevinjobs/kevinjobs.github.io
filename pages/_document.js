/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 16:47:00
 * @LastEditTime : 2022-01-24 17:49:32
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\pages\_document.js
 * @Description  : 
 */
/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 15:20:40
 * @LastEditTime : 2022-01-24 15:22:04
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\pages\_document.js
 * @Description  : 
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';

const bodyStyle = {
  margin: 0,
  padding: 0,
  height: '100%',
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html style={{height: '100%'}}>
        <Head />
        <body style={bodyStyle}>
          <Main style={{height: '100%'}} />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;