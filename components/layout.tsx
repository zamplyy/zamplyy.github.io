import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-background pt-64 sm:pt-40">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
