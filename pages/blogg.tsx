import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import { GetStaticProps } from "next";
import {
  Category,
  getAllUniquePostCategories,
  getSortedPostsData,
  PostsWithId,
} from "../utils/posts";
import React from "react";
import Link from "next/link";
import UserIcon from "../public/assets/icons/user.svg";
import { dayAndMonthFromDate } from "../utils/dates";

type Props = {
  allPostsData: PostsWithId;
  uniquePostCategories: Category[];
};

const Blogg = (props: Props) => {
  const { allPostsData, uniquePostCategories } = props;

  const getCategoryColor = (category: string) => {
    const color = uniquePostCategories.find((cat) => cat.name === category)
      ?.color;
    if (color) return color;
    return "#ff0000";
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Blogg</title>
        </Head>
        <Header />
        <article>
          <section>
            <Container>
              <h1 className="pb-10">Blogg</h1>
            </Container>
          </section>
          <section>
            <Container>
              <div className="grid grid-cols-4">
                <div className="col-span-3">
                  <ul>
                    {allPostsData.map(
                      ({ id, date, title, author, category, readingTime }) => (
                        <li key={id}>
                          <div className="flex flex-row pb-14">
                            <div
                              className="w-40 h-40 flex-shrink-0"
                              style={{
                                backgroundColor: getCategoryColor(category),
                              }}
                            ></div>
                            <div className="pt-2 px-8">
                              <UserIcon />
                            </div>
                            <div className="pt-1 flex-grow">
                              <Link href={`/blogg/${id}`}>
                                <div className="max-w-sm">
                                  <h3 className="font-bold uppercase py-1 tracking-wide text-lg hover:underline">
                                    {title}
                                  </h3>
                                  <p className="py-2">{author}</p>
                                  <div className="flex flex-row justify-between">
                                    <p className="font-semibold py-1 text-base text-black">
                                      {dayAndMonthFromDate(date)}
                                    </p>
                                    <p className="font-semibold py-1 text-base text-black">
                                      {readingTime}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold uppercase py-1 tracking-wide text-lg">
                    Kategorier
                  </h3>

                  {uniquePostCategories.map(({ name }) => (
                    <p
                      key={name}
                      className="font-semibold py-1 text-base text-black"
                    >
                      {`#${name}`}
                    </p>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Blogg;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const uniquePostCategories = getAllUniquePostCategories(allPostsData);
  return {
    props: {
      allPostsData,
      uniquePostCategories,
    },
  };
};
