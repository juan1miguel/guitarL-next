import Link from "next/link";
import Layout from "../components/layout";
export default function Nosotros() {
  return (
    <div>
      <Layout
        title={'Nosotros'}
        description='Sobre nosotros y algo mas'
      >
        <h2>Desde nosotros</h2>
        <Link href="/">Ir a Inicio</Link>
      </Layout>
    </div>
  );
}
