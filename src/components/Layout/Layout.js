import classes from "./Layout.module.css";

import MainHeader from "./MainHeader";
import Hero from "./Hero";
const Layout = (props) => {
  return (
    <>
      <MainHeader></MainHeader>
      <Hero></Hero>
      <main className={classes.grid}>{props.children}</main>
    </>
  );
};

export default Layout;
