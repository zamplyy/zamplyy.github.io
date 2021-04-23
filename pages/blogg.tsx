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
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { dayAndMonthFromDate } from "../utils/dates";
import { motion } from "framer-motion";
import { IconLink } from "../components/IconLink";
import UserIcon from "../public/assets/icons/user.svg";
import Tag from "../public/assets/icons/tag.svg";
import Question from "../public/assets/icons/question.svg";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<PostsWithId>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const search = searchTerm.toLowerCase();
    const results = allPostsData.filter(({ title, author, category }) => {
      return (
        title.toLowerCase().includes(search) ||
        author.toLowerCase().includes(search) ||
        category.toLowerCase().includes(search)
      );
    });
    setSearchResults(results);
  }, [searchTerm]);

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
              <h1>Blogg</h1>
            </Container>
          </section>
          <section>
            <Container>
              <div className="py-14 flex w-1/2">
                <input
                  type="text"
                  placeholder="Sök"
                  value={searchTerm}
                  onChange={handleChange}
                  className="bg-white border-4 border-gray-400 rounded-full px-5 py-4  flex-grow"
                />
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-4 md:col-span-3">
                  <ul>
                    {searchResults.map(
                      ({ id, date, title, author, category, readingTime }) => (
                        <li key={id}>
                          <div className="flex flex-row pb-14">
                            <div
                              className="hidden sm:block w-40 flex-shrink-0"
                              style={{
                                backgroundColor: getCategoryColor(category),
                              }}
                            ></div>
                            <div className="pt-2 pr-2 sm:px-8">
                              <UserIcon />
                            </div>
                            <div className="pt-1 flex-grow">
                              <div className="max-w-sm">
                                <Link href={`/blogg/${id}`}>
                                  <h3 className="font-bold uppercase py-1 tracking-wide text-lg hover:underline">
                                    {title}
                                  </h3>
                                </Link>
                                <p className="py-1">{author}</p>
                                <p className="font-semibold text-base">
                                  {`#${category}`}
                                </p>
                                <div className="flex flex-row justify-between">
                                  <p className="font-semibold pt-1 text-base text-black">
                                    {dayAndMonthFromDate(date)}
                                  </p>
                                  <p className="font-semibold pt-1 text-base text-black">
                                    {readingTime}
                                  </p>
                                </div>
                              </div>
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
                    <motion.div
                      className=""
                      key={name}
                      whileHover={{ scale: 1.02 }}
                    >
                      <p
                        className="font-semibold py-1 text-base  hover:underline cursor-pointer"
                        onClick={() => setSearchTerm(name)}
                      >
                        {`#${name}`}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
          <section className="py-20 bg-accent-1">
            <Container>
              <div className="flex justify-center">
                <h2 className="font-bold uppercase">Instagram</h2>
              </div>
            </Container>
          </section>
          <section className="py-24">
            <Container>
              <div className="flex flex-col sm:flex-row justify-evenly">
                <IconLink
                  text="Det finns inga dumma frågor"
                  icon={<Question />}
                  link="/fragor_och_svar"
                  title="Frågor & svar"
                />
                <IconLink
                  link="/sa_funkar_det"
                  icon={<Tag />}
                  title="Hur gör man egentligen?"
                  text="Kolla in Så funkar det"
                />
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
