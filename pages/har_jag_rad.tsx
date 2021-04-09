import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import React from "react";
import Card from "../components/card";
import AffordCalculator from "../components/affordCalculator";
import { IconLink } from "../components/IconLink";

import Tag from "../public/assets/icons/tag.svg";
import Regret from "../public/assets/icons/regret.svg";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Har jag råd</title>
        </Head>
        <Header />
        <article>
          <Container>
            <h1 className="max-w-screen-lg lg:mx-auto">Har jag råd</h1>
          </Container>
          <section className="py-10 mt-5">
            <Container>
              <div className="max-w-screen-lg lg:mx-auto">
                <h2 className="font-bold text-3xl">
                  Här får du hjälp att se om du har råd
                </h2>
                <p className="text-2xl py-4 font-light">
                  Att hålla reda på hur mycket pengar en har på kontot är inte
                  alltid så lätt. Med Har jag råd får du bättre koll! Följ
                  instruktionerna här nedanför så drar vi igång!
                </p>
              </div>
            </Container>
          </section>
          <section>
            <Container>
              <AffordCalculator />
            </Container>
          </section>
          <section className=" bg-accent-1">
            <Container>
              <div className="flex flex-col md:flex-row items-center space-y-6 pt-12 pb-20 md:justify-center md:space-x-10 md:py-24">
                <Card width={300} height={300}>
                  <div className="p-5 flex flex-col items-center justify-center flex-grow">
                    <img src={`/assets/bourse-tilted.svg`} />
                  </div>
                </Card>
                <Card width={320} height={230}>
                  <div className="flex flex-col flex-grow relative">
                    <p className="italic font-semibold text-9xl text-left pl-5">
                      “
                    </p>
                    <p className="italic font-semibold text-2xl absolute top-24 left-10">
                      Det är coolt att ha koll!
                    </p>
                  </div>
                </Card>
              </div>
            </Container>
          </section>
          <section className="py-24">
            <Container>
              <div className="flex flex-col sm:flex-row justify-evenly">
                <IconLink
                  text="Hur gör jag nu"
                  icon={<Regret />}
                  link="/jag_angrar_mig"
                  title="jag ångrar mig"
                />
                <IconLink
                  link="/sa_funkar_det"
                  icon={<Tag />}
                  title="Hur gör man egentligen?"
                  text="Kolla in Så funkar det"
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
