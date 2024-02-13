import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { PATH } from "@/config/config";
import classes from "./main-navigation.module.css"

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href={PATH.HOME}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={PATH.POSTS}>Posts</Link>
          </li>
          <li>
            <Link href={PATH.CONTACT}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
