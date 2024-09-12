import {useEffect, useState } from "react";
import Navbar, { NavbarProps } from "./Navbar";
import { Outlet } from "react-router-dom";
import { BGImage } from "../App";

export interface RootProps extends NavbarProps, BGImage {
}

function Root(props: RootProps) {
  const [bgImage, setBgImage] = useState(props.mobile);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth >= 1024) {
        setBgImage(props.desktop);
      } else if (window.innerWidth >= 768) {
        setBgImage(props.tablet);
      } else {
        setBgImage(props.mobile);
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, [props.desktop, props.mobile, props.tablet]);

  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-screen overflow-auto"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <Navbar links={props.links} handleBg={props.handleBg}/>
      <Outlet />
    </div>
  );
}

export default Root;