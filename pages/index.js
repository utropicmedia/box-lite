import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Box Lite</title>
        <meta name="description" content="Box Lite" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Box Lite</h1>
      </main>
    </div>
  );
}
