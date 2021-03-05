import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import ResponsivePlayer from "../components/responsivePlayer";
import Card from "../components/card";
import React, { CSSProperties } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

type Props = { title: string };

const Index = (props: Props) => {
  const quotes = [
    {
      image: "",
      quote:
        "Nu behöver jag inte ringa till mamma för att kolla om jag har råd!",
    },
    {
      image: "",
      quote: "Här är ett till bra quote som vi kan använda oss av!",
    },
  ];
  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 40px)",
    width: 40,
    height: 80,
    cursor: "pointer",
  };
  const indicatorStyles: CSSProperties = {
    backgroundColor: "#33787B",
    width: 16,
    height: 16,
    borderRadius: "100%",
    display: "inline-block",
    margin: "14px 8px",
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Min Ekonom</title>
        </Head>
        <Container>
          <Header />
        </Container>
        <article>
          <Container>
            <h1>Det är jättekul med pengar</h1>
            <div className="pt-20 max-w-screen-lg lg:mx-auto ">
              <ResponsivePlayer url="/assets/promo-video.mp4" controls />
            </div>
            <p className="text-2xl font-normal whitespace-pre-line py-20 leading-snug">
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
            <Carousel
              infiniteLoop
              stopOnHover
              showStatus={false}
              showThumbs={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <img src={"/assets/icons/left-arrow.svg"} />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <img src={"/assets/icons/right-arrow.svg"} />
                  </button>
                )
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ ...indicatorStyles, backgroundColor: "#E0EBEB" }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={indicatorStyles}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              {quotes.map((quote, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center space-x-10 bg-accent-1 py-24"
                  >
                    <Card width={300} height={300}>
                      <div className="p-5 flex flex-col items-center justify-center flex-grow">
                        <img
                          src={`/assets/money${index}.jpg`}
                          alt={"Image from quote " + index}
                        />
                      </div>
                    </Card>
                    <Card width={440} height={230}>
                      <div className="p-5 flex flex-col flex-grow relative">
                        <p className="italic font-semibold text-9xl text-left">
                          “
                        </p>
                        <p className="italic font-semibold text-2xl p-8 absolute top-12 text-center">
                          {quote.quote}
                        </p>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </Carousel>
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
