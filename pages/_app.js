/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 15:03:42
 * @LastEditTime : 2022-01-24 16:55:03
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\pages\_app.js
 * @Description  : 
 */
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}