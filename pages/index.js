import Link from "next/link";
import Layout from "../components/layout";
export default function Home() {
  return (
    <>
      <Layout
      title={'Inicio'}
      description={'Blog de musica guitarras y mas'}
      >
        <h1>Hola Mundo en Next</h1>
        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  );
}
