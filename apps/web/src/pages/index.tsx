import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";

const Page = () => {
  return (
    <Link as={NextLink} href="/one">
      <Text>One</Text>
    </Link>
  );
};

export default Page;
