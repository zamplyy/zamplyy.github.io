import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import { Quotes } from "../components/Quotes";
import { Quote } from ".";

const quotes: Quote[] = [
  {
    image: "",
    quote: "Nu behöver jag inte ringa till mamma för att kolla om jag har råd!",
  },
  {
    image: "",
    quote: "Här är ett till bra quote som vi kan använda oss av!",
  },
];

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Om oss</title>
        </Head>
        <Header />
        <article>
          <section>
            <Container>
              <h1 className="max-w-screen-lg lg:mx-auto">Om oss</h1>
              <div className="flex justify-end ">
                <img
                  src={"/assets/bourse_standing.svg"}
                  className="absolute z-0 -left-10  lg:z-10 hidden md:block"
                />
                <div className="md:w-2/5 lg:w-1/2 pb-8 z-10 lg:z-0 pt-5">
                  <h2>Vad hur varför</h2>
                  <p>
                    SEO-optimerad text om hur vi vann PTS tävlingen. Denna text
                    är så bra att folk vill dela den på LinkedIn eftersom de
                    tycker att det vi gjort är så bra. Wow!
                  </p>
                  <br />
                  <p>
                    SEO-optimerad text om hur vi vann PTS tävlingen. Denna text
                    är så bra att folk vill dela den på LinkedIn eftersom de
                    tycker att det vi gjort är så bra. Wow!
                  </p>
                  <br />
                  <p>
                    SEO-optimerad text om hur vi vann PTS tävlingen. Denna text
                    är så bra att folk vill dela den på LinkedIn eftersom de
                    tycker att det vi gjort är så bra. Wow!
                  </p>
                  <br />
                  <p>
                    SEO-optimerad text om hur vi vann PTS tävlingen. Denna text
                    är så bra att folk vill dela den på LinkedIn eftersom de
                    tycker att det vi gjort är så bra. Wow!
                  </p>
                </div>
              </div>
            </Container>
          </section>
          <section>
            <Container></Container>
          </section>
          <section>
            <Quotes quotes={quotes} />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Index;
