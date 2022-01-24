/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 10:59:52
 * @LastEditTime : 2022-01-24 20:54:05
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\lib\posts.js
 * @Description  :
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDir = path.join(process.cwd(), 'posts');

const fileNames = fs.readdirSync(postsDir);

export function getSortedPostsData() {
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    return {
      id,
      content: matterResult.content,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ createAt: a }, { createAt: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostData(id) {
  const fullpath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullpath, 'utf-8');

  const matterResult = matter(fileContents);

  return {
    id,
    content: marked.parse(matterResult.content),
    ...matterResult.data,
  };
}
