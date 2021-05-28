import Container from "./container";
import Instagram from "../public/assets/icons/instagram.svg";
import Envelope from "../public/assets/icons/envelope.svg";
import Facebook from "../public/assets/icons/fb.svg";
import AppStore from "../public/assets/icons/appstore.svg";
import GooglePlay from "../public/assets/icons/googleplay.svg";
import { useTheme } from "next-themes";
import { SVGIconColors } from "../utils/constants";

const Footer = () => {
  const { theme } = useTheme();
  const currentColor =
    theme === "dark" ? SVGIconColors.dark : SVGIconColors.light;

  return (
    <footer className="bg-accent-2">
      <Container>
        <div className="py-14 lg:px-14 flex justify-around flex-wrap ">
          <div className="px-7">
            <h3 className="text-sm font-medium text-white py-3 sm:text-base">
              Ladda ner appen
            </h3>
            <div className="flex sm:space-x-4 space-x-1">
              <a href="https://play.google.com/store" target="_blank">
                <GooglePlay fill={currentColor} />
              </a>
              <a href="https://www.apple.com/se/ios/app-store/" target="_blank">
                <AppStore />
              </a>
            </div>
          </div>
          <div className="px-7">
            <h3 className="text-sm font-medium text-white py-3 sm:text-base">
              Kontakt
            </h3>
            <div className="flex sm:space-x-4 space-x-1">
              <a href="https://www.instagram.com/" target="_blank">
                <Instagram />
              </a>
              <a href="https://play.google.com/store" target="_blank">
                <Envelope />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <Facebook />
              </a>
            </div>
          </div>
          <div className="flex justify-center flex-grow items-end md:justify-end pb-4 pt-4">
            <a className="pr-4" href="https://www.pts.se/" target="_blank">
              <img src={"/assets/pts-white.png"} />
            </a>
            <a
              className="-mb-3 px-4"
              href="https://www.tietoevry.com/"
              target="_blank"
            >
              <img src={"/assets/tietoevry-white.png"} />
            </a>
            <a
              className="pl-4"
              href="https://www.lansstyrelsen.se/orebro.html"
              target="_blank"
            >
              <img src={"/assets/lansstyrelsen.png"} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
