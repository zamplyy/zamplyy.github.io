import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import React from "react";
import { IconLink } from "../components/IconLink";
import Regret from "../public/assets/icons/regret.svg";
import Tag from "../public/assets/icons/tag.svg";

import { Game } from "../components/Game";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useTheme } from "next-themes";
import { SVGIconColors } from "../utils/constants";

const Index = () => {
  const { theme } = useTheme();
  const currentColor =
    theme === "dark" ? SVGIconColors.dark : SVGIconColors.light;
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <Head>
            <title>Spel</title>
          </Head>
          <Header />
          <article>
            <Container>
              <div className="max-w-screen-lg lg:mx-auto">
                <h1 className="mb-36">Spel</h1>
                <div className="mb-10">
                  <h2>Supertydlig text om hur denna funktion funkar</h2>
                  <p>
                    SEO-optimerad är denna text också såklart. När en googlar
                    och kommer rakt in till denna sida ska denna text på ett
                    lättillgängligt sätt introducera användaren till hur denna
                    funktion fungerar. Superbra!
                  </p>
                </div>
              </div>
            </Container>
            <section className="py-20 bg-accent-1 mt-20 hidden lg:block">
              <Container>
                <Game />
              </Container>
            </section>
            <section className="py-20 bg-accent-1 mt-20 block lg:hidden">
              <Container>
                <p className="text-white">
                  För att spela spelet öppna hemsidan på en större skärm!
                </p>
              </Container>
            </section>
            <section className="py-36">
              <Container>
                <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-24 sm:space-y-0 space-y-8">
                  <IconLink
                    text="Hur gör jag nu"
                    icon={<Regret fill={currentColor} />}
                    link="/jag_angrar_mig"
                    title="jag ångrar mig"
                  />
                  <IconLink
                    link="/sa_funkar_det"
                    icon={<Tag fill={currentColor} />}
                    title="Hur gör man egentligen?"
                    text="Kolla in Så funkar det"
                  />
                </div>
              </Container>
            </section>
          </article>
        </Layout>
      </DndProvider>
    </>
  );
};

export default Index;
