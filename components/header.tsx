import Link from "next/link";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();

  const pages = [
    { link: "/", title: "Hem" },
    { link: "/sa_funkar_det", title: "Så funkar det" },
    { link: "/har_jag_rad", title: "Har jag råd" },
    { link: "/jag_angrar_mig", title: "Jag ångrar mig" },
    { link: "/bli_kop_kompis", title: "Bli köpkompis" },
    { link: "/spel", title: "Spel" },
    { link: "/blogg", title: "Blogg" },
    { link: "/om_oss", title: "Om oss" },
    { link: "/fragor_och_svar", title: "Frågor & svar" },
  ];

  const isActive = (link: string) => {
    if (router.asPath === link) {
      return "border-opacity-1";
    } else {
      return "border-opacity-0";
    }
  };

  return (
    <header className="fixed top-0 z-40 py-6 px-10 bg-white opacity-95 w-full">
      <div className="flex items-center justify-between max-w-screen-xl m-auto">
        <div className="flex-none">
          <Link href="/">
            <a>
              <img src={"/assets/logo.svg"} />
            </a>
          </Link>
        </div>
        <nav className="flex pl-8 flex-wrap lg:flex-nowrap font-jost flex-grow justify-end space-x-4">
          {pages.map((page) => (
            <Link href={page.link} key={page.link}>
              <a
                className={`hover:border-opacity-100 border-b-4 border-accent-2 uppercase font-medium text-sm ${isActive(
                  page.link
                )}`}
              >
                {page.title}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
