import { Container, Flex, FlexProps } from "@chakra-ui/react";
import { Placeholder } from "./Placeholder";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export const Main = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" py="16" {...props}>
      <Container textAlign="center" flex="1">
        <h1 className={styles.title}>
          Welcome to Pepeballs Airdrop on Pepechain Testnet
        </h1>
        <br />
        <br />
        <p className={styles.description}>
          Stay tuned for the exciting launch of Pepechain, the state-of-the-art
          L2 rollup chain for memecoin traders, gaming enthusiasts, and DeFi
          users! Grab your Pepeball now!
        </p>
        <br />
        <br />
        <iframe
          src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc20.html?contract=0xD5678bCB3652a118A0B7e93C5C457e42ce263640&chain=%7B%22name%22%3A%22pepechain-testnet%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fl2-pepechain-testnet-8uk55qlld4.t.conduit.xyz%22%5D%2C%22nativeCurrency%22%3A%7B%22symbol%22%3A%22ETH%22%2C%22name%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22pepechain-testnet%22%2C%22chainId%22%3A906090%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22pepechain-testnet%22%7D&primaryColor=green"
          width="600px"
          height="600px"
          style={{ maxWidth: "100%" }}
          frameBorder="0"
        ></iframe>
      </Container>
    </Flex>
  );
};
