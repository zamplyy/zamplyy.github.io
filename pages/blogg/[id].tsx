import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import Header from "../../components/header";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../utils/posts";

const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
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
                <h1 className="">{postData.title}</h1>
                <h2>{postData.date}</h2>
                <div
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
  return {
    props: {
      postData,
    },
  };
};

export default Post;
