import { Stack, StackProps } from "@chakra-ui/react";

const Main = ({ children }: StackProps) => {
  return (
    <Stack
      width="full"
      height={{ base: "100vh", md: "auto" }}
      maxW="920px"
      margin="0 auto"
      bg="#FFFFFF"
    >
      {children}
    </Stack>
  );
};

export default Main;
