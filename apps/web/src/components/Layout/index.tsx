import Main from "ui/Main";

import Navbar from "components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
