import Layout from "../components/layout";
import Image from "next/image";
import styles from '../styles/nosotros.module.css'
export default function Nosotros() {
  return (
    <div>
      <Layout title={"Nosotros"} description="Sobre nosotros y algo mas">
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="imagen sobre nosotros"
            />
            <div>
              <p>
                Es un hecho establecido hace demasiado tiempo que un lector se
                distraerá con el contenido del texto de un sitio mientras que
                mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                distribución más o menos normal de las letras, al contrario de
                usar textos como por ejemplo Contenido aquí, contenido . Estos
                textos hacen parecerlo un español que se puede leer. Muchos
                paquetes
              </p>
              <p>
                Es un hecho establecido hace demasiado tiempo que un lector se
                distraerá con el contenido del texto de un sitio mientras que
                mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                distribución más o menos normal de las letras, al contrario de
                usar textos como por ejemplo Contenido aquí, contenido . Estos
                textos hace
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
