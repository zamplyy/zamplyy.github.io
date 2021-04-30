import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import Select from "react-select";
import { RoundButton } from "../components/roundButton";
import Search from "../public/assets/icons/search2.svg";
import React, { useState, ChangeEvent } from "react";
import { IconLink } from "../components/IconLink";
import Friend from "../public/assets/icons/friend.svg";
import Tag from "../public/assets/icons/tag.svg";
import { Accordion } from "../components/Accordion";

enum Category {
  har_jag_rad = "har_jag_rad",
  bli_kop_kompis = "bli_kop_kompis",
  jag_angrar_mig = "jag_angrar_mig",
  ordlista = "ordlista",
}

const options = [
  { value: "relevans", label: "Relevans" },
  { value: Category.har_jag_rad, label: "Har jag råd" },
  { value: Category.bli_kop_kompis, label: "Bli köpkompis" },
  { value: Category.jag_angrar_mig, label: "Jag ångrar mig" },
  { value: Category.ordlista, label: "Ordlista" },
];

const styles = {
  container: (base: any) => ({
    ...base,
    flex: 1,
  }),
  control: (base: any) => ({
    ...base,
    borderRadius: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    border: "4px solid rgba(156, 163, 175, 1)",
    fontSize: 25,
  }),
};

export type Answer = {
  title: string;
  category: Category;
  answer: string;
};

const answers: Answer[] = [
  {
    title: "Skillnad på vad jag behöver och vill ha?",
    category: Category.har_jag_rad,
    answer: "lorem",
  },
  {
    title: "Vad kan jag göra för att spara pengar?",
    category: Category.har_jag_rad,
    answer: "lorem",
  },
  {
    title: "Hur handlar man “lagom”?",
    category: Category.har_jag_rad,
    answer: "lorem",
  },
  {
    title: "Hur gör jag en budget?",
    category: Category.har_jag_rad,
    answer: "lorem",
  },
  {
    title: "Varför kan en budget vara bra att ha?",
    category: Category.har_jag_rad,
    answer: "lorem",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Frågor &amp; Svar</title>
        </Head>
        <Header />
        <article>
          <section>
            <Container>
              <div className="max-w-screen-lg lg:mx-auto">
                <h1>Frågor &amp; svar</h1>
                <div className="md:w-3/5 lg:w-2/5 pb-8 z-10 lg:z-0 pt-5 mb-28">
                  <h2>
                    Här kan du se vad andra undrar över kring pengar, sparande
                    och annat. Du kan också ställa dina egna frågor till våra
                    experter.
                  </h2>
                </div>
              </div>
            </Container>
          </section>
          <section>
            <Container>
              <div className="max-w-screen-lg lg:mx-auto">
                <p className="font-semibold py-1 text-base uppercase ml-5">
                  Sortera efter
                </p>
                <div className="max-w-xl flex items-center pb-4">
                  <Select
                    options={options}
                    defaultValue={options[0]}
                    styles={styles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </div>
                <div className="py-4 items-center flex ">
                  <input
                    type="text"
                    placeholder="Sök"
                    value={searchTerm}
                    onChange={handleChange}
                    className="bg-white border-4 border-gray-400 rounded-full px-5 py-4 flex-grow text-lg"
                  />
                  <RoundButton
                    text="Sök"
                    onClick={() => console.log("hej")}
                    icon={<Search />}
                  />
                </div>
                <div className="flex flex-col rounded-4xl bg-accent-1 p-20">
                  <p className="font-semibold py-1 text-base uppercase ml-5 mb-4 ">
                    Resultat
                  </p>
                  <Accordion options={answers} />
                </div>
              </div>
            </Container>
          </section>
          <section className="py-24">
            <Container>
              <div className="flex flex-col sm:flex-row justify-evenly">
                <IconLink
                  link="/sa_funkar_det"
                  icon={<Tag />}
                  title="Hur gör man egentligen?"
                  text="Kolla in Så funkar det"
                />
                <IconLink
                  link="/bli_kop_kompis"
                  icon={<Friend />}
                  title="Bli köpkompis"
                  text="Enkelt & smart"
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
