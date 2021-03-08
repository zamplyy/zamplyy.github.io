import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Bli köpkompis</title>
        </Head>
        <Header />
        <Container>
          <article>
            <h1 className="max-w-screen-lg lg:mx-auto">Bli köpkompis</h1>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
