import { StackProps } from "@chakra-ui/react";
import Header from "components/Header";
import Main from "ui/Main";

const Layout = ({ children }: StackProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
