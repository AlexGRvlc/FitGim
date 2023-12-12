import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

export default function layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{`FitGim - ${title}`}</title>
        <meta name={description} content={description} />
      </Head>

      <Nav />

      {children}

      <Footer />
    </>
  );
}
