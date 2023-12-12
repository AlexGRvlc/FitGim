import Layout from "../components/layout";
import Header from "../components/header";

const Page404 = () => {
  return (
    <Layout
      title={"Pagina no Encontrada"}
      description={"La página a la que intentas acceder no existe"}
    >
      <Header titulo={"Pagina No Encontrada"} image={""}></Header>
    </Layout>
  );
};

export default Page404;
