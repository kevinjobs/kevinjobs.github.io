/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 10:59:52
 * @LastEditTime : 2022-01-24 11:18:32
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \nextjs-blog\lib\posts.js
 * @Description  : 
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDir);
  
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    return {
      id,
      content: matterResult.content,
      ...matterResult.data
    }
  })

  return allPostsData.sort(({date: a}, {date: b}) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  })
}