import Head from "next/head";
import Nav from "./nav-tienda";
import Header from "./header-tienda";
import Footer from "./footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const layoutTienda = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{`FitGim-Tienda - ${title}`}</title>
        <meta name={description} content={description} />
      </Head>

      <Nav />

      <Header />
      <SpeedInsights/>

      {children}

      <Footer />
    </>
  );
};

export default layoutTienda;
