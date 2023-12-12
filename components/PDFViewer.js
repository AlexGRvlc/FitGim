import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { saveAs } from "file-saver";
import styles from "../styles/pdfviewer.module.css";

// Cambiar la importación
import "pdfjs-dist/build/pdf.worker";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const downloadPDF = () => {
    saveAs(pdfUrl, "horario.pdf");
  };

  return (
    <div>
      <div>
        <button className={`${styles.btn} mb-20 mt-20`} onClick={downloadPDF}>
          Descargar PDF
        </button>
      </div>
      <div>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.doc}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div>
        <p>{/* Página {pageNumber} de {numPages} */}</p>
      </div>
    </div>
  );
};

export default PDFViewer;
