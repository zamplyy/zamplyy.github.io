import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Jag ångrar mig</title>
        </Head>
        <Header />
        <Container>
          <article>
            <h1 className="max-w-screen-lg lg:mx-auto">Jag ångrar mig</h1>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
