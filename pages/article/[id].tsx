import {getAllPostIds, getPostData, PostData} from '../../lib/posts';
import styles from '../../styles/article.module.scss';
import ToTop from '../../components/to-top';

export interface ArticleProps {
  postData: PostData
}

export type StaticProps = {
  params: any;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props: StaticProps) {
  const { params }= props;

  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Article(props: ArticleProps) {
  const { postData } = props;

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
