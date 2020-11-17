import Link from "next/link";
import { initialItems } from "../../utils";
import styles from "../../styles/Home.module.css";

const DetailPage = ({ id }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello from <span>{id}</span>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Link href="/">
          <a>&larr; Back</a>
        </Link>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: initialItems.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  if (!id) {
    console.log("not found");
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
    },
  };
}

export default DetailPage;
