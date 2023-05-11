import { Box, Container } from "@chakra-ui/react";
import { Placeholder } from "./Placeholder";

export const Navbar = () => {
  return (
    <Box as="nav" role="navigation" bg="bg-accent">
      <Container>
        <Placeholder minH="40"></Placeholder>
      </Container>
    </Box>
  );
};

export default Navbar;
