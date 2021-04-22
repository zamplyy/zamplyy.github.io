import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

// const readingTime = require('reading-time');

import readingTime from "reading-time";

export type Category = {
  name: string;
  color: string;
};

type Post = {
  date: number;
  title: string;
  author: string;
  image: string;
  category: string;
  readingTime: string;
};

type PostWithId = Post & {
  id: string;
};
type PostWithContent = Post & {
  id: string;
  contentHtml: string;
};

export type PostsWithId = PostWithId[];

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): PostsWithId {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const minutesRead = `${Math.round(
      readingTime(matterResult.content).minutes
    )} min läsning`;

    return {
      id,
      ...(matterResult.data as Post),
      date: Date.parse(matterResult.data.date),
      readingTime: minutesRead,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getAllUniquePostCategories(posts: PostsWithId): Category[] {
  const availableColors = ["#33787B", "#EACE97", "#F8AF87", "#C2E4D8"];

  const uniqueCategories = posts
    .map((post) => post.category)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((post, i) => {
      return { name: post, color: availableColors[i] || "#C2E4D8" };
    });
  return uniqueCategories;
}

export async function getPostData(id: string): Promise<PostWithContent> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as Post),
  };
}
