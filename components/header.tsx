import Link from "next/link";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useWindowSize from "../utils/useWindowSize";
import Close from "../public/assets/icons/close-menu.svg";
import Hamburger from "../public/assets/icons/hamburger.svg";
import DarkMode from "../public/assets/icons/dark-mode.svg";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const { width } = useWindowSize();
  const breakpoint = width && width < 1020;

  const { theme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentColor = theme === "light" ? "#343434" : "#bababa";

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
      return true;
    } else {
      return false;
    }
  };

  const bigMenu = () => {
    return (
      <nav className="flex pl-8 flex-wrap lg:flex-nowrap font-jost flex-grow justify-end space-x-4">
        {pages.map((page) => (
          <Link href={page.link} key={page.link}>
            <a
              className={`hover:border-opacity-100 border-b-4 border-accent-2 dark:border-accent-1 uppercase font-medium text-sm ${
                isActive(page.link)
                  ? "border-opacity-1 dark:border-opacity-1"
                  : "border-opacity-0 dark:border-opacity-0"
              }`}
            >
              {page.title}
            </a>
          </Link>
        ))}
      </nav>
    );
  };

  const smallMenu = () => {
    return (
      <nav
        className={`fixed  -right-full top-0 bg-accent-1 w-full h-full flex flex-col overflow-auto ease-in-out transition-all duration-300 transform ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        } `}
      >
        <div className="flex justify-between bg-white bg-opacity-80 py-6 px-10 mb-4">
          <img src={"/assets/logo.svg"} />
          <div className="pr-2 self-center" onClick={() => setIsOpen(false)}>
            <Close />
          </div>
        </div>
        {pages.map((page) => (
          <Link href={page.link} key={page.link}>
            <a
              className={`hover:border-opacity-100 uppercase text-lg py-2 px-4 font-jost font-normal ${
                isActive(page.link) ? "bg-white" : "bg-accent-1"
              }`}
            >
              <span className="text-text-color">{page.title}</span>
            </a>
          </Link>
        ))}
      </nav>
    );
  };

  return (
    <header
      className={`fixed top-0 z-40 py-6 px-10 bg-white dark:bg-darkModeBackground w-full ${
        breakpoint ? "opacity-100 border-b-2 border-accent-1" : "opacity-95"
      } `}
    >
      <div className="flex items-center justify-between max-w-screen-xl m-auto">
        <div className="flex-none">
          <Link href="/">
            <a>
              <img src={"/assets/logo.svg"} />
            </a>
          </Link>
        </div>
        <motion.div
          className="w-10 h-10 flex items-center justify-center relative"
          animate={{
            // rotate: theme === "dark" ? 180 : 0,
            rotateY: theme === "dark" ? 180 : 0,
          }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <DarkMode fill={currentColor} />
        </motion.div>
        {breakpoint ? (
          <div className="pr-2" onClick={() => setIsOpen(true)}>
            <Hamburger />
          </div>
        ) : null}
        {breakpoint ? smallMenu() : bigMenu()}
      </div>
    </header>
  );
};

export default Header;

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
