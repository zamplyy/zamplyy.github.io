import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import { GetStaticProps } from "next";
import { getSortedPostsData, PostsWithId } from "../utils/posts";
import React from "react";
import Link from "next/link";

const Blogg = ({ allPostsData }: { allPostsData: PostsWithId }) => {
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
              <h1 className="max-w-screen-lg lg:mx-auto">Blogg</h1>
            </Container>
          </section>
          <section>
            <Container>
              <div className="max-w-screen-lg lg:mx-auto">
                <ul>
                  {allPostsData.map(({ id, date, title, author, image }) => (
                    <li className="hover:underline" key={id}>
                      <Link href={`/blogg/${id}`}>
                        <h2>{title}</h2>
                      </Link>
                      <p>{author}</p>
                      <br />
                      <img src={`/assets/${image}`} />
                      <small>
                        <p>{date}</p>
                      </small>
                    </li>
                  ))}
                </ul>
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
  return {
    props: {
      allPostsData,
    },
  };
};
