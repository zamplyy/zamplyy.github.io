import Container from "./container";
import InstagramLogo from "../assets/instagram.svg";
import Envelope from "../assets/envelope.svg";
import FBLogo from "../assets/fb.svg";
import AppstoreLogo from "../assets/appstore.svg";
import GooglePlayLogo from "../assets/googleplay.svg";

const Footer = () => {
  return (
    <footer className="bg-accent-2">
      <Container>
        <div className="py-14 px-14 flex w-1/2 justify-around">
          <div>
            <h3 className="text-base font-semibold text-white py-3">
              Ladda ner appen
            </h3>
            <div className="flex space-x-4">
              <a href="https://play.google.com/store" target="_blank">
                <GooglePlayLogo />
              </a>
              <a href="https://www.apple.com/se/ios/app-store/" target="_blank">
                <AppstoreLogo style={{ fill: "#ff0000" }} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white py-3">Kontakt</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramLogo />
              </a>
              <a href="https://play.google.com/store" target="_blank">
                <Envelope />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <FBLogo />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
