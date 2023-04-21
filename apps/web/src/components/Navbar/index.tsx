import NextLink from "next/link";
import { Router } from "next/router";
import { useState } from "react";

import {
  Box,
  HStack,
  Image,
  Link,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on("routeChangeStart", () => setIsLoading(true));
  Router.events.on("routeChangeComplete", () => setIsLoading(false));
  Router.events.on("routeChangeError", () => setIsLoading(false));

  return (
    <Stack
      width="100%"
      position="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      paddingTop={2}
      paddingBottom={isLoading ? 0 : 2}
      backgroundColor="white"
      borderBottom="1px solid"
      borderColor="gray.100"
      boxShadow={"lg"}
      alignItems="center"
    >
      <HStack
        width="100%"
        maxW="980px"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Link
          as={NextLink}
          href="/"
          display="flex"
          alignItems="center"
          gap={2}
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
      </HStack>
      {isLoading && (
        <Progress size="xs" width="100%" color="#3078a7" isIndeterminate />
      )}
    </Stack>
  );
};

export default Navbar;
