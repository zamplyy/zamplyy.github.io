import Container from "./container";

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
                <img src={"/assets/icons/googleplay.svg"} />
              </a>
              <a href="https://www.apple.com/se/ios/app-store/" target="_blank">
                <img src={"/assets/icons/appstore.svg"} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white py-3 sm:text-base">
              Kontakt
            </h3>
            <div className="flex sm:space-x-4 space-x-1">
              <a href="https://www.instagram.com/" target="_blank">
                <img src={"/assets/icons/instagram.svg"} />
              </a>
              <a href="https://play.google.com/store" target="_blank">
                <img src={"/assets/icons/envelope.svg"} />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={"/assets/icons/fb.svg"} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
