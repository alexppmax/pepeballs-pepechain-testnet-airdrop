import Head from "next/head";
import styles from "../styles/Home.module.css";
import App from "../components/App";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pepechain Testnet dApp</title>
        <meta
          name="description"
          content="Start your Pepechain Testnet journey by participating in on-chain quests!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
      <main className={styles.main}></main>
    </div>
  );
}
