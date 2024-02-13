import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header>
      <Link href={PATH.HOME}>
        <a>
          <Logo />
        </a>
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
