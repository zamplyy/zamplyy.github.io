import Container from "./container";

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
                <img src={"/assets/icons/googleplay.svg"} />
              </a>
              <a href="https://www.apple.com/se/ios/app-store/" target="_blank">
                <img src={"/assets/icons/appstore.svg"} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white py-3">Kontakt</h3>
            <div className="flex space-x-4">
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
