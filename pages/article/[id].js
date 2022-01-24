/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 16:31:44
 * @LastEditTime : 2022-01-24 21:42:19
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\pages\article\[id].js
 * @Description  :
 */
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../styles/article.module.scss';
import ToTop from '../../components/to-top';

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Article({ postData }) {
  return (
    <div className={styles.article}>
      <h3 className={styles.title}>{postData.title}</h3>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></div>
      <ToTop />
    </div>
  );
}
