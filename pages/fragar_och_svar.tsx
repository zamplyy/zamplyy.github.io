import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Frågor & Svar</title>
        </Head>
        <Container>
          <Header />
          <article>
            <h1>Frågor & Svar</h1>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
