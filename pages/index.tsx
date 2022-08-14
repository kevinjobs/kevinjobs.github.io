import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import Image from "next/image";
import Background from "../static/img/background.jpg";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <div className={styles.postList}>
        {allPostsData.map(({ id, createAt, title, category, author }) => {
          return (
            <div className={styles.item} key={id}>
              <div className={styles.title}>
                <Link href={`/article/${id}`}><h3>{ title }</h3></Link>
              </div>
              <div className={styles.date}>
                <div className='month'>{ createAt }</div>
              </div>
              <div className={styles.author}>
                <Link href={`/author/${author}`}>{ author || '佚名' }</Link>
              </div>
              <div className={styles.category}>
                <span>{category || '未分类'}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>{ page }</Layout>
  )
}
