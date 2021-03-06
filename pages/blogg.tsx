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
import Close from "../public/assets/icons/close-small.svg";
import { useTheme } from "next-themes";
import { SVGIconColors } from "../utils/constants";

type Props = {
  allPostsData: PostsWithId;
  uniquePostCategories: Category[];
};

const MAX_NUMBER_OF_POSTS_PER_PAGE = 10;

const Blogg = (props: Props) => {
  const { allPostsData, uniquePostCategories } = props;

  const getCategoryColor = (category: string) => {
    const color = uniquePostCategories.find(
      (cat) => cat.name === category
    )?.color;
    if (color) return color;
    return "#ff0000";
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTags, setFilterTags] = useState<string[]>([]);
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
    if (filterTags.length > 0) {
      const filtered = results.filter(
        (results) => !!filterTags.find((filter) => filter === results.category)
      );
      const capped = filtered.slice(0, MAX_NUMBER_OF_POSTS_PER_PAGE);
      setSearchResults(capped);
    } else {
      const capped = results.slice(0, MAX_NUMBER_OF_POSTS_PER_PAGE);
      setSearchResults(capped);
    }
  }, [searchTerm, filterTags]);

  const removeTag = (tag: string) => {
    const filtered = filterTags.filter((aTag) => aTag !== tag);
    setFilterTags(filtered);
  };

  const addTag = (tag: string) => {
    if (!!filterTags.find((aTag) => aTag === tag)) return;
    const tags = [...filterTags];
    tags.push(tag);
    setFilterTags(tags);
  };

  const { theme } = useTheme();
  const currentColor =
    theme === "dark" ? SVGIconColors.dark : SVGIconColors.light;
  const userIconColor = theme === "dark" ? SVGIconColors.dark : "#343434";

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
              <div className="py-14">
                <div className="flex w-1/2">
                  <input
                    type="text"
                    placeholder="Sök"
                    value={searchTerm}
                    onChange={handleChange}
                    style={{
                      color: "#343434",
                    }}
                    className="bg-white border-4 border-gray-400 rounded-full px-5 py-4 flex-grow text-lg"
                  />
                </div>
                <div className="flex pt-5 w-1/2 flex-wrap">
                  {filterTags.map((tag) => (
                    <div
                      key={tag}
                      className="pl-4 py-1 mx-2 my-1 bg-grey-background flex items-center"
                    >
                      <p className="text-lg pr-4 dark:text-text-color">{tag}</p>
                      <motion.div
                        className="px-4"
                        onClick={() => removeTag(tag)}
                        whileHover={{ scale: 1.3 }}
                      >
                        <Close />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8 mb-36">
                <div className="col-span-4 md:col-span-3">
                  <ul>
                    {searchResults.map(
                      ({ id, date, title, author, category, readingTime }) => (
                        <li key={id}>
                          <div className="flex flex-row pb-14 ">
                            <div className="pt-2">
                              <div
                                className="hidden sm:block w-40 flex-shrink-0 h-40 self-center"
                                style={{
                                  backgroundColor: getCategoryColor(category),
                                }}
                              ></div>
                            </div>
                            <div className="pt-2 pr-2 sm:px-8">
                              <UserIcon fill={userIconColor} />
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
                        onClick={() => addTag(name)}
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
          <section className="py-36">
            <Container>
              <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-24 sm:space-y-0 space-y-8">
                <IconLink
                  text="Det finns inga dumma frågor"
                  icon={<Question fill={currentColor} />}
                  link="/fragor_och_svar"
                  title="Frågor & svar"
                />
                <IconLink
                  link="/sa_funkar_det"
                  icon={<Tag fill={currentColor} />}
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
