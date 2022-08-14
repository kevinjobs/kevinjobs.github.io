import { getSortedPostsData} from "../../lib/posts";
import { PostData } from "../../lib/posts";
import React from "react";
import styles from "../../styles/category.module.scss";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

export interface CategoryProps {
  allPostsData: PostData[];
}

export interface Cate {
  name: string;
  children: PostData[];
}

export default function Category(props: CategoryProps) {
  const { allPostsData } = props;

  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const cates = [
      {
        name: "",
        children: [],
      }
    ];

    for (const postData of allPostsData) {
      if (!postData.category) {
        cates[0].children.push(postData);
      } else {
        let idx;
        for (const cate of cates) {
          idx = deepIndexOf(cates, postData);
        }
        if (idx < 0) {
          cates.push({
            name: postData.category,
            children: [postData],
          })
        } else {
          cates[idx].children.push(postData);
        }
      }
    }

    setCategories(cates);
  }, [allPostsData]);

  const renderCate = (cate: Cate) => {
    if (!cate.children.length) {
      return null;
    }

    return (
      <div key={cate.name} className={styles.cateItem}>
        <h3>{ cate.name || "No Category" }</h3>
        <div>
          {
            cate.children.map(data => {
              return (
                <div key={data.id} className={styles.cateItemChild}>
                  <Link href={`/article/${data.id}`}>{ data.title }</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {categories.map(renderCate)}
    </div>
  )
}

const deepIndexOf = (arr, data) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]?.name === data?.category) {
      return i;
    }
  }
  return -1;
}