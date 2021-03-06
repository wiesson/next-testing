import Link from "next/link";
import { useContext } from "react";
import styles from "../styles/Home.module.css";
import ListContext from "../context";
import { generateData } from "../utils";

const List = ({ items = [] }) => {
  const context = useContext(ListContext);

  function loadMoreFn() {
    context.addFn(generateData());
  }

  return (
    <>
      <div className={styles.grid}>
        {items.concat(context.items).map((item) => (
          <Link href={`/detail/${item}`} key={item}>
            <a className={styles.card}>
              <h3>{item} &rarr;</h3>
            </a>
          </Link>
        ))}
      </div>

      <button onClick={loadMoreFn}>Load more</button>
    </>
  );
};

export default List;
