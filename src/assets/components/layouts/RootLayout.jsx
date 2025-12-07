import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Searchbar from "./Searchbar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Searchbar/>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
