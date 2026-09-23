import { Outlet } from "react-router";

import NavBar from "../components/NavBar/NavBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

import styles from "./Layout.module.scss";
import Header from "../components/Header/Header";

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
