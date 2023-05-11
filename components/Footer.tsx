import { Box, BoxProps, Container } from "@chakra-ui/react";
import { Placeholder } from "./Placeholder";

export const Footer = (props: BoxProps) => {
  return (
    <Box as="footer" role="contentinfo" bg="bg-accent" {...props}>
      <Container>
        <center>
          <a
            href="https://pepemon.world"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Pepemon World for more information
          </a>
        </center>
      </Container>
    </Box>
  );
};

export default Footer;
