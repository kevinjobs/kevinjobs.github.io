import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDir = path.join(process.cwd(), 'posts');

const filenames = fs.readdirSync(postsDir);

export type PostData = {
  id: number | string;
  content: string;
  title: string;
  author: string;
  createAt: string;
  desc?: string;
  category?: string;
}

const encodeId = (filename: string) => {
  return filename.replace(/\.md$/, '');
}

const decodeId = (id: string) => {
  return `${id}.md`;
}

const parseMd = (filepath: string) => {
  const filename = path.basename(filepath);
  const id = encodeId(filename);
  const file = fs.readFileSync(filepath, "utf-8");
  const matterResult = matter(file);
  return {
    id,
    content: marked.parse(matterResult.content),
    ...matterResult.data,
  } as PostData;
}

export function getSortedPostsData() {
  const allPostsData: PostData[] = filenames.map((filename) => {
    return parseMd(path.join(postsDir, filename));
  });

  return allPostsData.sort((prev, next) => {
    return prev.createAt < next.createAt ? 1 : -1;
  });
}

export function getAllPostIds() {
  return filenames.map((filename) => {
    return {
      params: {
        id: encodeId(filename),
      },
    };
  });
}

export function getPostData(id) {
  const filename = decodeId(id);
  const filepath = path.join(postsDir, filename);
  return parseMd(filepath);
}
