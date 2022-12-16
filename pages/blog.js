import Layout from "../components/layout";
import Post from "../components/post";
export default function Blog({ posts }) {
  return (
    <div>
      <Layout
        title={"Blog"}
        description="Blog de musica venta de guitarras,consejo guitarLA"
      >
        <main className="contenedor">
          <h2 className="heading">Blog</h2>
          <div>
            {posts.map((post) =>
             (

               <Post key={post.id} post={post.attributes} />
             )
              
            )}
          </div>
        </main>
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts } = await respuesta.json();
  return {
    props: {
      posts,
    },
  };
}
