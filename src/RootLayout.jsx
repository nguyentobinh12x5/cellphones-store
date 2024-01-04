import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import FooterCPN from "./components/Footer";
const RootLayout = () => {
  return (
    <main>
      <Nav></Nav>
      <Outlet />
      <FooterCPN></FooterCPN>
    </main>
  );
};

export default RootLayout;
