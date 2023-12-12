import { useState } from "react";
import styles from "../styles/form.module.css";

const Form = () => {
  const [mensaje, setMensaje] = useState("");
  const [entrada, setEntrada] = useState(false);
  const [entradaCorrecta, setEntradaCorrecta] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setEntrada(true);
    const data = new FormData(e.target);
    const response = await fetch(e.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "app/json",
      },
    });
    const result = await response.text();
    if (!response.ok) {
      setMensaje(result.errors.map((error) => error.mensaje).join(", "));
      return false;
    }

    const nombre = data.get("nombre");
    const socio = data.get("socio");
    const apellido = data.get("apellido");

    const datos = {
      nombre,
      apellido,
      socio,
    };

    if (Object.values(datos).includes("")) {
      setMensajeError("Todos los campos son obligatorios");
      return;
    }

    setMensaje(`Saludos ${nombre}`);
    setEntradaCorrecta(true);
  };

  return (
    <>
      <div>
        {entrada && (
          <div>
            {entradaCorrecta ? (
              <p className={styles.mensajeBienvenida}>{mensaje}</p>
            ) : (
              <p className={styles.mensajeError}>{mensajeError}</p>
            )}
          </div>
        )}
      </div>

      <div className={`${styles.container}`}>
        <form
          className={`${styles.form} mt-50 mb-50 `}
          method="POST"
          onSubmit={handlerSubmit}
        >
          <div className={styles.container}>
            <div className="mb-4">
              <label className={styles.label} htmlFor="nombre">
                Nombre:
              </label>
              <input
                id="nombre"
                type="text"
                className={styles.input}
                placeholder="Nombre del Cliente"
                name="nombre"
              />
            </div>
            <div className="mb-4">
              <label className={styles.label} htmlFor="apellido">
                Apellido:
              </label>
              <input
                id="apellido"
                type="text"
                className={styles.input}
                placeholder="Nombre del Cliente"
                name="apellido"
              />
            </div>
            <div className="mb-4">
              <label className={styles.label} htmlFor="socio">
                Numero de Socio:
              </label>
              <input
                id="socio"
                type="number"
                className={styles.input}
                placeholder="Numero de Socio"
                name="socio"
              />
            </div>

            <div className="text-center">
              <button className={`${styles.btn} text-center mt-40`}>
                entra
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
