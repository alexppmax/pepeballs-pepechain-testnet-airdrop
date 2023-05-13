import Head from "next/head";
import styles from "../styles/Home.module.css";
import App from "../components/App";
import Navbar from "../components/Navbar";
import { Container } from "@chakra-ui/react";

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
        <Navbar />
        <div className={styles.background}></div>
        <Container maxW="container.md" py={8}></Container>
      </Head>
      <App />
      <main className={styles.main}></main>
    </div>
  );
}
