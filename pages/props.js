export async function getStaticProps() {
    const respuesta = await fetch(
      `${process.env.API_URL}/suplementos?populate=imagen`
    );
    const { data: suplementos } = await respuesta.json();
  
    return {
      props: {
        suplementos,
      },
    };
  }