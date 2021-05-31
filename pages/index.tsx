import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import ResponsivePlayer from "../components/responsivePlayer";
import React, { CSSProperties } from "react";
import Link from "next/link";
import { Quotes } from "../components/Quotes";

type Props = { title: string };
export type Quote = {
  image: string;
  quote: string;
};
const quotes: Quote[] = [
  {
    image: "sitting_left.svg",
    quote: "Nu behöver jag inte ringa till mamma för att kolla om jag har råd!",
  },
  {
    image: "bourse-tilted.svg",
    quote: "Här är ett till bra quote som vi kan använda oss av!",
  },
];

const Index = (props: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Min Ekonom</title>
        </Head>
        <Header />

        <article>
          <Container>
            <h1 className="max-w-screen-lg lg:mx-auto">
              Pengar behöver inte kännas svårt
            </h1>
            <div className="pt-20 max-w-screen-lg lg:mx-auto ">
              <ResponsivePlayer url="/assets/promo-video.mp4" controls />
            </div>
            <p className="text-2xl font-light whitespace-pre-line py-20 leading-snug max-w-screen-lg lg:mx-auto">
              {`Hur får man pengarna att räcka till nästa gång man får nya? Hur handlar man lagom? 
              Hur räknar man ut vad varor kostar egentligen?

              `}
              Ibland är det skönt med lite hjälp. Det kan du få om du använder
              Min ekonom. Nyfiken på hur denna tjänst funkar? Spana in{" "}
              <Link href="/sa_funkar_det">
                <a className="underline text-accent-2">så funkar det</a>
              </Link>
              {`. 
              
              Även: beskrivande text om videon ni sålde in projektet med.`}
            </p>
          </Container>
          <section>
            <Quotes quotes={quotes} />
          </section>
          <section className="py-20">
            <Container>
              <div className="flex justify-center">
                <h2 className="font-bold uppercase">Instagram</h2>
              </div>
            </Container>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  return { props: { title: "Hej" } };
};
