import React, { useState } from "react";
import Routing from "./Routes/Routing";
import { Routes } from "react-router";
import { useSelector } from "react-redux";
import SideNavbar from "../Common/SideNavbar/SideNavbar";

const MainLayout = () => {
  const auth = useSelector((state: any) => state.auth);

  const AppLayout = auth.isLoggedIn ? (
    <>
      <SideNavbar />
      <Routing />
    </>
  ) : (
    <Routing />
  );
  return <div>{AppLayout}</div>;
};

export default MainLayout;
