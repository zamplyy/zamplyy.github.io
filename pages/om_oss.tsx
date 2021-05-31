import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import { Quotes } from "../components/Quotes";
import { Quote } from ".";

const quotes: Quote[] = [
  {
    image: "bourse_clueless.svg",
    quote: "Nu behöver jag inte ringa till mamma för att kolla om jag har råd!",
  },
  {
    image: "sitting_left.svg",
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
              <div className="flex justify-end">
                <img
                  src={"/assets/bourse_standing.svg"}
                  className="absolute z-0 -left-36 mt-10 lg:z-10 hidden md:block"
                />
                <div className="md:w-2/5 lg:w-3/5 pb-8 z-10 lg:z-0 mt-10 mb-14  ">
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
            <Quotes quotes={quotes} />
          </section>
          <section className="py-40 flex flex-col items-center">
            <h2 className="">Ett samarbete mellan</h2>
            <div className="flex items-center mx-8 flex-col sm:flex-row">
              <a
                className="pr-6 py-6"
                href="https://www.pts.se/"
                target="_blank"
              >
                <img src={"/assets/pts-black.png"} />
              </a>
              <a
                className="py-6 sm:-mb-10 md:-mb-14 px-6"
                href="https://www.tietoevry.com/"
                target="_blank"
              >
                <img src={"/assets/tietoevry-black.png"} />
              </a>
              <a
                className="pl-6 mb-1 py-6"
                href="https://www.lansstyrelsen.se/orebro.html"
                target="_blank"
              >
                <img src={"/assets/lansstyrelsen-big.png"} />
              </a>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Index;
