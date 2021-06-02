import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import Header from "../../components/header";
import Back from "../../public/assets/icons/back.svg";
import UserIcon from "../../public/assets/icons/user.svg";
import { dayAndMonthFromDate } from "../../utils/dates";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Category,
  getAllPostIds,
  getAllUniquePostCategories,
  getPostData,
  getSortedPostsData,
  PostWithContent,
} from "../../utils/posts";
import React from "react";
import Link from "next/link";
import { SVGIconColors } from "../../utils/constants";
import { useTheme } from "next-themes";

const Post = ({
  postData,
  uniquePostCategories,
}: {
  postData: PostWithContent;
  uniquePostCategories: Category[];
}) => {
  const { theme } = useTheme();
  const currentColor = theme === "dark" ? SVGIconColors.dark : "#343434";

  const getCategoryColor = (category: string) => {
    const color = uniquePostCategories.find(
      (cat) => cat.name === category
    )?.color;
    if (color) return color;
    return "#ff0000";
  };

  return (
    <>
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Header />
        <article>
          <section className="">
            <Container>
              <div className="max-w-screen-lg lg:mx-auto">
                <Link href="/blogg">
                  <a className="flex space-x-4 items-center">
                    <Back stroke={currentColor} />
                    <span className="font-bold text-lg hover:underline">
                      Tillbaka
                    </span>
                  </a>
                </Link>
                <div
                  className="h-36 sm:h-72 my-10"
                  style={{
                    background: `${getCategoryColor(postData.category)} url(${
                      postData.image
                    })`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="text-4xl sm:text-5xl">{postData.title}</h1>
                <div className="flex py-8">
                  <UserIcon fill={currentColor} />
                  <div className=" pl-10">
                    <p>{postData.author}</p>
                    <div className="flex font-semibold text-base">
                      {dayAndMonthFromDate(postData.date)}
                      <span className="pl-5">{postData.readingTime}</span>
                    </div>
                  </div>
                </div>
                <div
                  className="pb-20"
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
              </div>
            </Container>
          </section>
        </article>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  const uniquePostCategories = getAllUniquePostCategories(getSortedPostsData());
  return {
    props: {
      postData,
      uniquePostCategories,
    },
  };
};

export default Post;
