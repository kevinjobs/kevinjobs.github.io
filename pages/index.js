/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 10:32:23
 * @LastEditTime : 2022-01-24 11:17:29
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \nextjs-blog\pages\index.js
 * @Description  : 
 */
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  console.log(allPostsData)

  return (
    <div className="container">
      <ul className='list'>
        {allPostsData.map(({ id, date, title, content}) => {
          return (
            <li className='list-item' key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              {content}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
