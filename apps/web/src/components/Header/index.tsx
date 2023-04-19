import { Box, HStack, Image, Link, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import Main from "ui/Main";

const Header = () => {
  const router = useRouter();
  const [isRouterReady, setIsRouterReady] = useState<boolean>(false);

  useEffect(() => {
    setIsRouterReady(router.isReady);
  }, [router.isReady]);

  return (
    <Main>
      <HStack paddingX={4} paddingY={2} backgroundColor="white">
        <Link
          as={NextLink}
          href="/one"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Box boxSize="40px" borderRadius="50%" border="1px solid #1A202C">
            <Image src="/assets/logo.png" alt="logo" />
          </Box>
          <Text color="#627f91" fontWeight={600}>
            Podcaster
          </Text>
        </Link>

        {!isRouterReady && <Spinner />}
      </HStack>
    </Main>
  );
};

export default Header;
