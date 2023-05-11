import Head from "next/head";
import styles from "../styles/Home.module.css";
import App from "../components/App"; // Import the App component

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pepechain Testnet PPBLZ Airdrop</title>
        <meta
          name="description"
          content="Grab your PPBLZ on the Pepechain Testnet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App /> {/* Include the App component on your page */}
      <main className={styles.main}></main>
    </div>
  );
}
