import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import ResponsivePlayer from "../components/responsivePlayer";
import React from "react";
import { IconLink } from "../components/IconLink";
import Question from "../public/assets/icons/question.svg";
import Money from "../public/assets/icons/money.svg";
import PictureRow from "../components/picture-row";
import { useTheme } from "next-themes";
import { SVGIconColors } from "../utils/constants";

const Index = () => {
  const { theme } = useTheme();
  const currentColor =
    theme === "dark" ? SVGIconColors.dark : SVGIconColors.light;
  return (
    <>
      <Layout>
        <Head>
          <title>Så funkar det</title>
        </Head>
        <Header />
        <article>
          <Container>
            <h1 className="max-w-screen-lg lg:mx-auto">Så funkar det</h1>
            <div className="pt-20 max-w-screen-lg lg:mx-auto mb-36">
              <ResponsivePlayer url="/assets/promo-video.mp4" controls />
            </div>
          </Container>
          <section className="py-20 bg-accent-1 ">
            <Container>
              <PictureRow
                imageUrl="/assets/money1.jpg"
                title="Steg 1"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
              />
              <PictureRow
                imageUrl="/assets/money0.jpg"
                title="Steg 2"
                imageIsLeft
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
              />
              <PictureRow
                imageUrl="/assets/money1.jpg"
                title="Steg 3"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
              />
            </Container>
          </section>
          <section className="py-36">
            <Container>
              <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-24 sm:space-y-0 space-y-8">
                <IconLink
                  text="Spana in vår guide"
                  icon={<Money fill={currentColor} />}
                  link="/har_jag_rad"
                  title="Har jag råd"
                />
                <IconLink
                  text="Det finns inga dumma frågor"
                  icon={<Question fill={currentColor} />}
                  link="/fragor_och_svar"
                  title="Frågor & svar"
                />
              </div>
            </Container>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Index;
