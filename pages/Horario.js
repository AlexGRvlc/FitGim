import Layout from "@/components/layout";
import Header from "@/components/header";
import PDFViewer from "../components/PDFViewer";
import fondo from "../public/images/fondo-horario.webp";
import sytles from "../styles/horario.module.css";

const pdfUrl = "/pdfs/horario.pdf";

const Horario = () => {
  return (
    <Layout title={"Horario"} description={"Horario de actividades"}>
      <Header titulo={"HORARIO"} image={fondo} />

      <section className="fondo-7">
        <div className={sytles.pdf__container}>
          <PDFViewer pdfUrl={pdfUrl} className={sytles.pdf} />
        </div>
      </section>
    </Layout>
  );
};

export default Horario;
