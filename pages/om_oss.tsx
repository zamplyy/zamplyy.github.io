import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Om oss</title>
        </Head>
        <Container>
          <Header />
          <article>
            <h1>Om oss</h1>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
