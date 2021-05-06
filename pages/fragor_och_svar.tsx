import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import Select from "react-select";
import { RoundButton } from "../components/roundButton";
import Search from "../public/assets/icons/search2.svg";
import React, { useState, ChangeEvent, useEffect } from "react";
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
    answer: `Praesent mollis, neque in tempus varius, felis arcu elementum orci, sed tincidunt urna orci a dolor. Cras elementum nulla vel nisl efficitur cursus. Sed ut velit eu enim vestibulum mollis eu sed augue. Fusce nec sapien in eros laoreet aliquam id id dolor. Maecenas malesuada magna sit amet sollicitudin volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Nulla quis mauris et magna aliquam pharetra. Vivamus sit amet iaculis augue, et congue neque. Ut sodales massa vitae quam molestie, sit amet ultrices tellus rutrum. Aliquam aliquet aliquam porttitor. Aliquam erat volutpat. Ut fringilla velit sed quam accumsan accumsan. Nullam non ullamcorper ipsum. Nam malesuada orci quis urna ultricies, suscipit scelerisque sapien elementum. Pellentesque scelerisque dolor vitae felis tristique, vitae consectetur sapien dignissim. Pellentesque a purus condimentum, hendrerit tortor pulvinar, semper ipsum. Morbi iaculis, nibh ac efficitur blandit, nisi lorem laoreet massa, eu rhoncus erat massa ac nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
  },
  {
    title: "Vad kan jag göra för att spara pengar?",
    category: Category.har_jag_rad,
    answer: `ullam molestie, odio id rhoncus placerat, nisl ipsum finibus metus, vel fermentum ligula magna faucibus eros. Curabitur volutpat, mi mattis tincidunt pulvinar, lorem nunc tristique ex, consequat lobortis mauris ante vitae lectus. Pellentesque arcu purus, iaculis vitae molestie eu, bibendum ac mi.

    Pellentesque viverra nunc nisi, pellentesque cursus lorem fringilla sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur congue, elit a molestie pellentesque, orci risus vulputate ante, iaculis condimentum lorem sapien iaculis dui. Aliquam erat volutpat. Vivamus non neque eget tortor sodales elementum. Praesent neque eros, dignissim eu erat eget, cursus scelerisque elit. `,
  },
  {
    title: "Hur handlar man “lagom”?",
    category: Category.har_jag_rad,
    answer: `am erat volutpat. Vivamus non neque eget tortor sodales elementum. Praesent neque eros, dignissim eu erat eget, cursus scelerisque elit. Vivamus at urna sed mauris accumsan rutrum placerat sit amet sem. Phasellus congue lorem ut faucibus porta. Nunc ac lacinia tellus, ac consectetur odio. Aliquam tincidunt augue sapien, nec porttitor augue volutpat sit amet. Nunc malesuada lacus tortor, at volutpat lacus tincidunt at. Aenean imperdiet massa sit amet libero consequat lobortis ac in mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi scelerisque nulla ut nisl condimentum tempor.

    Mauris quis turpis ut risus vehicula sollicitudin. Pellentesque scelerisque est ipsum, vitae vehicula nisi venenatis in. Morbi eu felis cursus, imperdiet dui a, fringilla lorem.`,
  },
  {
    title: "Hur gör jag en budget?",
    category: Category.har_jag_rad,
    answer: `Mauris porttitor velit tellus, quis aliquet ex blandit eget. In augue odio, blandit quis dui sed, posuere elementum dui. Nam aliquet urna eu lectus tincidunt, ac pretium justo condimentum. In hac habitasse platea dictumst.

    Proin tortor nibh, feugiat consectetur maximus a, facilisis ut risus. Aliquam porta elementum nulla, quis cursus urna venenatis sit amet. Nulla facilisi. Donec enim velit, elementum vel gravida vitae, dignissim sit amet lectus. Cras viverra orci vitae imperdiet viverra. Nullam leo eros, finibus interdum tortor a, accumsan faucibus felis. Vivamus in augue tellus. Donec eget erat in diam pulvinar porttitor. Quisque eu gravida lectus.`,
  },
  {
    title: "Varför kan en budget vara bra att ha?",
    category: Category.har_jag_rad,
    answer: `Phasellus egestas ante id orci consectetur tempor. Duis purus nulla, pharetra tristique felis sit amet, luctus molestie odio. Vestibulum non elit erat. Integer ipsum nibh, elementum nec dolor sit amet, ultricies dictum mauris. Fusce vitae imperdiet lectus. Praesent mollis, neque in tempus varius, felis arcu elementum orci, sed tincidunt urna orci a dolor. Cras elementum nulla vel nisl efficitur cursus. Sed ut velit eu enim vestibulum mollis eu sed augue. Fusce nec sapien in eros laoreet aliquam id id dolor. Maecenas malesuada magna sit amet sollicitudin volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

    Nulla quis mauris et magna aliquam pharetra. Vivamus sit amet iaculis augue, et congue neque. Ut sodales massa vitae quam molestie, sit amet ultrices tellus rutrum.`,
  },
  {
    title: "Hur blir man köpkompis?",
    category: Category.bli_kop_kompis,
    answer: `Phasellus egestas ante id orci consectetur tempor. Duis purus nulla, pharetra tristique felis sit amet, luctus molestie odio. Vestibulum non elit erat. Integer ipsum nibh, elementum nec dolor sit amet, ultricies dictum mauris. Fusce vitae imperdiet lectus. Praesent mollis, neque in tempus varius, felis arcu elementum orci, sed tincidunt urna orci a dolor. Cras elementum nulla vel nisl efficitur cursus. Sed ut velit eu enim vestibulum mollis eu sed augue. Fusce nec sapien in eros laoreet aliquam id id dolor. Maecenas malesuada magna sit amet sollicitudin volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

    Nulla quis mauris et magna aliquam pharetra. Vivamus sit amet iaculis augue, et congue neque. Ut sodales massa vitae quam molestie, sit amet ultrices tellus rutrum.`,
  },
  {
    title: "Vad är skillnaden på att vara köpkompis och god man?",
    category: Category.bli_kop_kompis,
    answer: `Phasellus egestas ante id orci consectetur tempor. Duis purus nulla, pharetra tristique felis sit amet, luctus molestie odio. Vestibulum non elit erat. Integer ipsum nibh, elementum nec dolor sit amet, ultricies dictum mauris. Fusce vitae imperdiet lectus. Praesent mollis, neque in tempus varius, felis arcu elementum orci, sed tincidunt urna orci a dolor. Cras elementum nulla vel nisl efficitur cursus. Sed ut velit eu enim vestibulum mollis eu sed augue. Fusce nec sapien in eros laoreet aliquam id id dolor. Maecenas malesuada magna sit amet sollicitudin volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

    Nulla quis mauris et magna aliquam pharetra. Vivamus sit amet iaculis augue, et congue neque. Ut sodales massa vitae quam molestie, sit amet ultrices tellus rutrum.`,
  },
  {
    title: "Har jag ansvar för min kompis pengar?",
    category: Category.har_jag_rad,
    answer: `Phasellus egestas ante id orci consectetur tempor. Duis purus nulla, pharetra tristique felis sit amet, luctus molestie odio. Vestibulum non elit erat. Integer ipsum nibh, elementum nec dolor sit amet, ultricies dictum mauris. Fusce vitae imperdiet lectus. Praesent mollis, neque in tempus varius, felis arcu elementum orci, sed tincidunt urna orci a dolor. Cras elementum nulla vel nisl efficitur cursus. Sed ut velit eu enim vestibulum mollis eu sed augue. Fusce nec sapien in eros laoreet aliquam id id dolor. Maecenas malesuada magna sit amet sollicitudin volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

    Nulla quis mauris et magna aliquam pharetra. Vivamus sit amet iaculis augue, et congue neque. Ut sodales massa vitae quam molestie, sit amet ultrices tellus rutrum.`,
  },
  {
    title: "Hur gör jag en budget?",
    category: Category.ordlista,
    answer: `Phasellus egestas ante id orci consectetur tempor. Duis purus nulla, pharetra tristique felis sit amet, luctus molestie odio. Vestibulum non elit erat. Integer ipsum nibh, elementum nec dolor sit amet, ultricies dictum mauris. Fusce vitae imperdiet lectus. Praesent mollis, neque in tempus varius, felis arcu elementum orci, sed tincidunt urna orci a dolor. Cras elementum nulla vel nisl efficitur cursus. Sed ut velit eu enim vestibulum mollis eu sed augue. Fusce nec sapien in eros laoreet aliquam id id dolor. Maecenas malesuada magna sit amet sollicitudin volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

    Nulla quis mauris et magna aliquam pharetra. Vivamus sit amet iaculis augue, et congue neque. Ut sodales massa vitae quam molestie, sit amet ultrices tellus rutrum.`,
  },
  {
    title: "Varför kan en budget vara bra att ha?",
    category: Category.jag_angrar_mig,
    answer: `Phasellus egestas ante id orci consectetur tempor. Duis purus nulla, pharetra tristique felis sit amet, luctus molestie odio. Vestibulum non elit erat. Integer ipsum nibh, elementum nec dolor sit amet, ultricies dictum mauris. Fusce vitae imperdiet lectus. Praesent mollis, neque in tempus varius, felis arcu elementum orci, sed tincidunt urna orci a dolor. Cras elementum nulla vel nisl efficitur cursus. Sed ut velit eu enim vestibulum mollis eu sed augue. Fusce nec sapien in eros laoreet aliquam id id dolor. Maecenas malesuada magna sit amet sollicitudin volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

    Nulla quis mauris et magna aliquam pharetra. Vivamus sit amet iaculis augue, et congue neque. Ut sodales massa vitae quam molestie, sit amet ultrices tellus rutrum.`,
  },
];

const MAX_NUMBER_OF_ANSWERS = 8;

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(options[0]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const [searchResults, setSearchResults] = useState<Answer[]>([]);

  useEffect(() => {
    const search = searchTerm.toLowerCase();
    const results = answers.filter(({ title, category }) => {
      return (
        title.toLowerCase().includes(search) ||
        category.toLowerCase().includes(search)
      );
    });
    if (filter.value === "relevans") {
      const capped = results.slice(0, MAX_NUMBER_OF_ANSWERS);
      setSearchResults(capped);
    } else {
      const filtered = results.filter(
        (results) => filter.value === results.category
      );
      const capped = filtered.slice(0, MAX_NUMBER_OF_ANSWERS);
      setSearchResults(capped);
    }
  }, [searchTerm, filter]);

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
                    value={filter}
                    onChange={(item) => {
                      if (item) {
                        setFilter(item);
                      }
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
                  <Accordion options={searchResults} />
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
