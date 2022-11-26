import Layout from "../components/layout";
import ListadoGuitarras from '../components/listado-guitarras'
export default function Tienda({guitarras}) {
  console.log(guitarras)
  return (
    <div>
      <Layout
        title={"Tienda Virtual"}
        description="Tienda Virtual,venta de guitarras instrumentos,GuitarLa"
      >
        <main className="contenedor">
          <h2 className="heading">Nuestra Coleccion</h2>
          <ListadoGuitarras
          
          />
        </main>
      </Layout>
    </div>
  );
}

export async function getStaticProps(){
const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
const {data: guitarras} = await respuesta.json()
return{
  props: {
    guitarras
  }
}
}