import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import ResponsivePlayer from "../components/responsivePlayer";
import React from "react";
import Card from "../components/card";
import PictureRow from "../components/picture-row";
import Link from "next/link";
import { IconLink } from "../components/IconLink";

const Index = () => {
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
            <div className="pt-20 max-w-screen-lg lg:mx-auto">
              <ResponsivePlayer url="/assets/promo-video.mp4" controls />
            </div>
          </Container>
          <section className="py-20 bg-accent-1 mt-20">
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
          <section className="py-24">
            <Container>
              <div className="flex flex-col sm:flex-row justify-evenly">
                <IconLink
                  text="Spana in vår guide"
                  image="/assets/icons/money.svg"
                  link="/har_jag_rad"
                  title="Har jag råd"
                />
                <IconLink
                  text="Det finns inga dumma frågor"
                  image="/assets/icons/question.svg"
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
