import Head from "next/head";
import styles from "../styles/Home.module.css";
import App from "../components/App";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
          `}
        </style>
        <title>Pepechain Testnet PPBLZ Airdrop</title>
        <meta
          name="description"
          content="Grab your PPBLZ on the Pepechain Testnet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
      <main className={styles.main}></main>
    </div>
  );
}
