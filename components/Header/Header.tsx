import css from "./Header.module.css";
import React from "react";
import Link from "next/link";





const Header = async () => {

    return <header className={css.header}>
  <Link href="/" aria-label="Home">
    NoteHub
  </Link>
  <nav aria-label="Main Navigation">
    <ul className={css.navigation}>
      <li>
        <Link href="/">Home</Link>
      </li>
       <li>
        <Link href="/profile">Profile</Link>
      </li>
         <li>
            <Link href="/sign-in">Login</Link>
          </li>
          <li>
            <Link href="/sign-up">Register</Link>
          </li>
    </ul>
  </nav>
</header>
};

export default Header;

function tagsList() {
  throw new Error("Function not implemented.");
}
