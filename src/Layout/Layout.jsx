import { Outlet } from "react-router";

import Header from "../components/header/Header";
import NavBar from "../components/NavBar/NavBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
