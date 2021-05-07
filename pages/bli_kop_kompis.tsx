import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import PictureRow from "../components/picture-row";
import { IconLink } from "../components/IconLink";

import Spel from "../public/assets/icons/spel.svg";
import Blogg from "../public/assets/icons/blogg.svg";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Bli köpkompis</title>
        </Head>
        <Header />
        <article>
          <Container>
            <div className="max-w-screen-lg lg:mx-auto">
              <h1 className="mb-14">Bli köpkompis</h1>
              <div className="mb-10">
                <h2>Köpkompis, verkar intressant men hur går det till?</h2>
                <p>
                  Har du fått en inbjudan till att bli köpkompis? Kul! Nu undrar
                  du säkert vad det innebär. En köpkompis kan chatta, stötta och
                  peppa en annan person. Samtidigt som köpkompisen kan hålla
                  lite koll på någon annans ekonomi.
                </p>
                <p>
                  En typiskt situation kan vara att din vän står inne i en butik
                  och har svårt att göra ett val. “Behöver jag en till
                  t-shirt?”. Du får en notifikation i appen och kan svara snabbt
                  och enkelt!
                </p>
              </div>
              <div className="mb-14">
                <h2>Hur skiljer det sig från att vara god man?</h2>
                <p>
                  Som god man kan du som nära anhörig företräda en person över
                  18 år som inte kan företräda sig själv. Till exempel kan du
                  betala räkningar, ansöka om bidrag, stödinsatser eller teckna
                  förtsäkringar i den andra personens namn.
                </p>
                <p>
                  Att vara nåns köpkompis kräver ingen fullmakt eller tillgång
                  till någons bankkonto. I appen ser du din köpkompis
                  köphistorik och kan därför hjälpa till att göra en bedömning
                  av vad som är ett rimligt köp.
                </p>
              </div>
            </div>
            <div className="flex -mb-48 justify-center">
              <img className="-ml-14" src={`/assets/sitting_left.svg`} />
              <img className="" src={`/assets/sitting_right.svg`} />
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
          <section className="py-36">
            <Container>
              <div className="flex flex-col sm:flex-row justify-evenly">
                <IconLink
                  title="6 enkla spartips för alla"
                  text="Läs Cissis blogginlägg nu"
                  link="/blogg"
                  icon={<Blogg />}
                />
                <IconLink
                  link="/spel"
                  title="Testa spelet"
                  text="Vad har du råd med?"
                  icon={<Spel />}
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
