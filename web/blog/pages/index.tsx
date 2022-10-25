import Layout from '../components/layout';
import {getSortedPostsData, PostData} from '../lib/posts';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import { BiCategory } from "react-icons/bi";
import { AiOutlineTags } from "react-icons/ai";
import { TbUserCircle } from "react-icons/tb";
import { BsCalendar2Date } from "react-icons/bs";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

export interface HomeProps {
  allPostsData: PostData[];
}

export default function Home(props: HomeProps) {
  const { allPostsData } = props;

  return (
    <div className={styles.container}>
      <div className={styles.postList}>
        {allPostsData.map((postData) => {
          const { id, createAt, title, category, author, tags } = postData;
          return (
            <div className={styles.item} key={id}>
              <div className={styles.itemBaseInfo}>
                <div className={styles.title}>
                  <Link href={`/article/${id}`}><h3>{ title }</h3></Link>
                </div>
              </div>
              <div className={styles.itemMoreInfo}>
                <div className={styles.date}>
                  <div className={styles.dateIcon}>
                    <BsCalendar2Date />
                  </div>
                  <div className={styles.dateText}>{ createAt }</div>
                </div>
                <div className={styles.author}>
                  <Link href={`/author/${author}`}>
                    <div className={styles.authorContainer}>
                      <div className={styles.authorIcon}><TbUserCircle /></div>
                      <div className={styles.authorText}>{ author || '佚名' }</div>
                    </div>
                  </Link>
                </div>
                <div className={styles.category}>
                  <div className={styles.cateIcon}><BiCategory /></div>
                  <div className={styles.cateText}>{category || '未分类'}</div>
                </div>
              </div>
              <div className={styles.tags}>
                <span className={styles.tagIcon}>
                  <AiOutlineTags />
                </span>
                {tags && tags.map(tag => <span className={styles.tag} key={tag}>{tag}</span>)}
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
