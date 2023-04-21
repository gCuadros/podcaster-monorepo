import NextLink from "next/link";
import { Router } from "next/router";
import { useState } from "react";

import {
  Box,
  HStack,
  Image,
  Link,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));
  Router.events.on("routeChangeError", () => setLoading(false));

  return (
    <HStack
      width="100%"
      position="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      paddingX={4}
      paddingY={2}
      backgroundColor="white"
      borderBottom="1px solid"
      borderColor="gray.100"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        as={NextLink}
        href="/"
        display="flex"
        alignItems="center"
        gap={2}
        width="100%"
        maxW="980px"
        transition="03.s all ease"
        _hover={{ textDecoration: "none", opacity: "0.8" }}
      >
        <Box boxSize="25px" borderRadius="50%">
          <Image src="/assets/logo.png" alt="logo" />
        </Box>
        <Text color="#3078a7" fontWeight={600}>
          Podcaster
        </Text>
      </Link>

      {loading && (
        <SkeletonCircle size="5" startColor="blue.300" endColor="#3078a7" />
      )}
    </HStack>
  );
};

export default Navbar;
