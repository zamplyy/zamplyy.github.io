import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import React from "react";
import Card from "../components/card";
import Link from "next/link";

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
                  Supertydlig text om hur denna funktion funkar
                </h2>
                <p className="text-2xl py-4 font-light">
                  SEO-optimerad är denna text också såklart. När en googlar och
                  kommer rakt in till denna sida ska denna text på ett
                  lättillgängligt sätt introducera användaren till hur denna
                  funktion fungerar. Superbra!
                </p>
              </div>
            </Container>
          </section>
          <section>
            <Container>
              <div className="flex justify-center mb-14">
                <Card height={500} width={500}></Card>
              </div>
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
                    <p className="italic font-semibold text-2xl absolute top-16 text-center p-3">
                      Börsen säger något uppmuntrande här.
                    </p>
                  </div>
                </Card>
              </div>
            </Container>
          </section>
          <section className="py-24">
            <Container>
              <div className="flex flex-col sm:flex-row justify-evenly">
                <Link href="/jag_angrar_mig">
                  <a href="/jag_angrar_mig">
                    <div className="hover:underline text-accent-2 flex flex-col items-center ">
                      <img className="py-4" src={"/assets/icons/regret.svg"} />
                      <h3 className="font-bold uppercase py-1 tracking-wide">
                        jag ångrar mig
                      </h3>
                      <p className="font-semibold py-1">Hur gör jag nu</p>
                    </div>
                  </a>
                </Link>
                <Link href="/sa_funkar_det">
                  <a href="/sa_funkar_det">
                    <div className="hover:underline text-accent-2 flex flex-col items-center ">
                      <img className="py-4" src={"/assets/icons/tag.svg"} />
                      <h3 className="font-bold uppercase py-1 tracking-wide">
                        Hur gör man egentligen?
                      </h3>
                      <p className="font-semibold py-1">
                        Kolla in Så funkar det
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            </Container>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Index;
