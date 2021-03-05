import Link from "next/link";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();

  const pages = [
    { link: "/sa_funkar_det", title: "Så funkar det" },
    { link: "/har_jag_rad", title: "Har jag råd" },
    { link: "/jag_angrar_mig", title: "Jag ångrar mig" },
    { link: "/bli_kop_kompis", title: "Bli köpkompis" },
    { link: "/spel", title: "Spel" },
    { link: "/blogg", title: "Blogg" },
    { link: "/om_oss", title: "Om oss" },
    { link: "/fragar_och_svar", title: "Frågor & svar" },
  ];

  const isActive = (link: string) => {
    if (router.asPath === link) {
      return "border-opacity-1";
    } else {
      return "border-opacity-0";
    }
  };

  return (
    <header className="flex mb-20 pt-8 items-center">
      <div className="flex-none">
        <Link href="/">
          <a className="hover:underline">
            <div
              className="rounded-full h-20 w-20  mx-6 flex items-center justify-center"
              style={{ backgroundColor: "#F8AF87" }}
            ></div>
          </a>
        </Link>
      </div>
      <nav className="flex flex-grow justify-between pl-8">
        {pages.map((page) => (
          <Link href={page.link} key={page.link}>
            <a
              className={`hover:border-opacity-100 px-4 md:px-2 font-jost border-b-2 border-accent-1 uppercase font-medium text-sm ${isActive(
                page.link
              )}`}
            >
              {page.title}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
