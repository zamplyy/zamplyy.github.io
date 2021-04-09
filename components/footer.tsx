import Container from "./container";
import Instagram from "../public/assets/icons/instagram.svg";
import Envelope from "../public/assets/icons/envelope.svg";
import Facebook from "../public/assets/icons/fb.svg";
import AppStore from "../public/assets/icons/appstore.svg";
import GooglePlay from "../public/assets/icons/googleplay.svg";

const Footer = () => {
  return (
    <footer className="bg-accent-2">
      <Container>
        <div className="py-14 lg:px-14 flex justify-around sm:justify-start sm:space-x-12">
          <div>
            <h3 className="text-sm font-medium text-white py-3 sm:text-base">
              Ladda ner appen
            </h3>
            <div className="flex sm:space-x-4 space-x-1">
              <a href="https://play.google.com/store" target="_blank">
                <GooglePlay />
              </a>
              <a href="https://www.apple.com/se/ios/app-store/" target="_blank">
                <AppStore />
              </a>
            </div>
          </div>

          <div>
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
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
