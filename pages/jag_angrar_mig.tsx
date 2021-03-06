import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import RegretGuide from "../components/regretGuide";
import Link from "next/link";
import React from "react";
import { IconLink } from "../components/IconLink";
import Friend from "../public/assets/icons/friend.svg";
import Spel from "../public/assets/icons/spel.svg";
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
          <title>Jag ångrar mig</title>
        </Head>
        <Header />
        <article>
          <section className="">
            <Container>
              <div className="lg:flex lg:flex-row justify-center">
                <div className="lg:max-w-md lg:mb-6">
                  <h1 className="mb-14">Jag ångrar mig</h1>
                  <h2 className="mb-10">
                    Visst får man ångra sina köp! Jag hjälper dig.
                  </h2>
                  <p className="mb-20">
                    Det är helt ok att ångra sina köp. Denna guide hjälper dig
                    reda ut vad du kan göra. Det är inte helt säkert att du kan
                    lämna tillbaka det du köpt och få tillbaka pengarna. Men det
                    är alltid värt ett försök.
                  </p>
                </div>
                <div className=" mt-5 -mb-72 z-10 lg:mt-28 lg:-mb-24 flex-grow max-w-xl ">
                  <div className="hidden lg:flex lg:absolute z-0 rounded-full h-96 w-96 ml-4 bg-accent-2 bg-opacity-10" />
                  <div className="hidden lg:flex lg:absolute z-0 rounded-full h-80 w-80 mt-24 ml-56 bg-accent-2 bg-opacity-20" />
                  <img
                    className="lg:absolute"
                    src={`/assets/bourse_sitting.svg`}
                  />
                </div>
              </div>
            </Container>
          </section>
          <section className=" bg-accent-1 py-28 z-10">
            <Container>
              <RegretGuide />
            </Container>
          </section>
          <section className="py-36">
            <Container>
              <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-24 sm:space-y-0 space-y-8">
                <IconLink
                  link="/bli_kop_kompis"
                  icon={<Friend fill={currentColor} />}
                  title="Bli köpkompis"
                  text="Enkelt & smart"
                />
                <IconLink
                  link="/spel"
                  icon={<Spel fill={currentColor} />}
                  title="Testa spelet"
                  text="Vad har du råd med?"
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
