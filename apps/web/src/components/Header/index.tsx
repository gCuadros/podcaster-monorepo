import { HStack, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [isRouterReady, setIsRouterReady] = useState<boolean>(false);

  useEffect(() => {
    setIsRouterReady(router.isReady);
  }, [router.isReady]);

  return (
    <HStack>
      <Text color="black">Podcaster </Text>
      {!isRouterReady && <Spinner />}
    </HStack>
  );
};

export default Header;
