import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import App from "../components/App";
import Navbar from "../components/Navbar";
import { Container, Flex, FlexProps } from "@chakra-ui/react";

export const Main = (props: FlexProps) => {
  const [selectedTab, setSelectedTab] = useState("erc20");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <Flex as="main" role="main" direction="column" flex="1" py="16" {...props}>
      <Container textAlign="center" flex="1" maxW="container.md">
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Welcome to Pepeballs Airdrop on Pepechain Testnet
          </h1>
        </div>
        <br />
        <br />
        <p className={styles.description}>
          Mint your own Pepeball token on the Pepechain Testnet and unlock a
          universe of benefits and exclusive early bird rewards. Why wait? Dive
          into the Pepechain Testnet adventure today!
          <br />
          <br />
          For more details, visit{" "}
          <a
            href="https://docs.pepemon.world/pepechain"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.pepemon.world/pepechain
          </a>
        </p>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "16px",
          }}
        >
          <button
            onClick={() => handleTabChange("erc20")}
            style={{
              backgroundColor: selectedTab === "erc20" ? "#5A67D8" : "#E2E8F0",
              color: selectedTab === "erc20" ? "white" : "black",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Claim PPBLZ
          </button>
          <button
            onClick={() => handleTabChange("erc721")}
            style={{
              backgroundColor: selectedTab === "erc721" ? "#5A67D8" : "#E2E8F0",
              color: selectedTab === "erc721" ? "white" : "black",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Mint Pepe Punks
          </button>
          <button
            onClick={() => handleTabChange("marketplace")}
            style={{
              backgroundColor:
                selectedTab === "marketplace" ? "#5A67D8" : "#E2E8F0",
              color: selectedTab === "marketplace" ? "white" : "black",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Bid on Pepesea
          </button>
        </div>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {selectedTab === "erc20" && (
            <iframe
              src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc20.html?contract=0xD5678bCB3652a118A0B7e93C5C457e42ce263640&chain=%7B%22name%22%3A%22pepechain-testnet%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fl2-pepechain-testnet-8uk55qlld4.t.conduit.xyz%22%5D%2C%22nativeCurrency%22%3A%7B%22symbol%22%3A%22pepETH%22%2C%22name%22%3A%22pepETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22pepechain-testnet%22%2C%22chainId%22%3A906090%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22pepechain-testnet%22%7D"
              width="600px"
              height="600px"
              style={{ maxWidth: "100%" }}
              frameBorder="0"
            ></iframe>
          )}
          {selectedTab === "erc721" && (
            <iframe
              src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc721.html?contract=0xab051b0E3fFFC28D7b458483A8bd6A545B89D099&chain=%7B%22name%22%3A%22pepechain-testnet%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fl2-pepechain-testnet-8uk55qlld4.t.conduit.xyz%22%5D%2C%22nativeCurrency%22%3A%7B%22symbol%22%3A%22pepETH%22%2C%22name%22%3A%22pepETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22pepechain-testnet%22%2C%22chainId%22%3A906090%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22pepechain-testnet%22%7D"
              width="600px"
              height="600px"
              style={{ maxWidth: "100%" }}
              frameBorder="0"
            ></iframe>
          )}
          {selectedTab === "marketplace" && (
            <iframe
              src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/marketplace-v3.html?contract=0x2FCb67128BE211D7c94dA8990AC61E6af2Ea0BD0&chain=%7B%22name%22%3A%22pepechain-testnet%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fl2-pepechain-testnet-8uk55qlld4.t.conduit.xyz%22%5D%2C%22nativeCurrency%22%3A%7B%22symbol%22%3A%22pepETH%22%2C%22name%22%3A%22pepETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22pepechain-testnet%22%2C%22chainId%22%3A906090%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22pepechain-testnet%22%7D&englishAuctionId=0&primaryColor=blue&secondaryColor=blue"
              width="600px"
              height="600px"
              style={{ maxWidth: "100%" }}
              frameBorder="0"
            ></iframe>
          )}
        </div>
      </Container>
    </Flex>
  );
};

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
      <Navbar />
      <App />
      <Main />
      <footer className={styles.footer}>
        <a
          href="https://pepemon.world"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Pepemon World for more information
        </a>
      </footer>
    </div>
  );
}
