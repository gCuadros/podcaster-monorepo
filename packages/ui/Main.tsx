import { Stack, StackProps } from "@chakra-ui/react";

const Main = ({ children }: StackProps) => {
  return (
    <Stack
      width="full"
      maxW="980px"
      margin="0 auto"
      bg="#FFFFFF"
      position="relative"
      paddingTop="50px"
    >
      {children}
    </Stack>
  );
};

export default Main;
