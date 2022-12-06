export default function Producto({guitarras}) {
    console.log(guitarras[0].attributes.nombre)
  return <div>Producto</div>;
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();
 

  return {
    props: {
        guitarras
    },
  };
}
