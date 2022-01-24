/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 10:32:23
 * @LastEditTime : 2022-01-24 21:28:30
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\pages\index.js
 * @Description  : 
 */
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/home.module.scss';
import Link from 'next/link';

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
    <div className="home" className={styles.home}>
      <div className='list'>
        {allPostsData.map(({ id, createAt, title, category, author }) => {
          return (
            <div className={styles.item} key={id}>
              <div className={styles.category}>
                <span>{category || '未分类'}</span>
              </div>
              <div className={styles.title}>
                <Link href={`/article/${id}`}><h3>{ title }</h3></Link>
              </div>
              <div className={styles.author}>
                <Link href={`/author/${author}`}>{ author || '佚名' }</Link>
              </div>
              <div className={styles.date}>
                <div className='month'>{ createAt }</div>
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
