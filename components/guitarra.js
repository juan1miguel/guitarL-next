import Image from "next/image";
import Link from "next/link";
export default function Guitarra({ guitarra }) {
  const { nombre, descripcion, precio, url, imagen } = guitarra;
  return (
    <div>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen guitarra ${nombre}`}
        width={600}
        height={400}
      />
      <div>
        <h3>{nombre} </h3>
        <p> {descripcion} </p>
        <p>${precio} </p>
        <Link href={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}
