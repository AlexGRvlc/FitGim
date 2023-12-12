import Head from "next/head";
import Nav from "./nav-tienda";
import Header from "./header-tienda";
import Footer from "./footer";

const layoutTienda = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{`FitGim-Tienda - ${title}`}</title>
        <meta name={description} content={description} />
      </Head>

      <Nav />

      <Header />

      {children}

      <Footer />
    </>
  );
};

export default layoutTienda;
