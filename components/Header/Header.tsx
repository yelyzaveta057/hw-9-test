"use client";

import { useAuthStore } from "../../lib/store/authStore";

import AuthNavigation from "../AuthNavigation/AuthNavigation";
import { TagsMenu } from "../TagsMenu/TagsMenu";
import css from "./Header.module.css";

import Link from "next/link";

const Header = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <header className={css.header}>
      <Link className={css.headerLink} href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link className={css.navigationLink} href="/">
              Home
            </Link>
          </li>
          <li className={css.navigationItem}>
            <Link
              href="/profile"
              prefetch={false}
              className={css.navigationLink}
            >
              Profile
            </Link>
          </li>
          {isAuthenticated && (
            <li className={css.navigationItem}>
              <TagsMenu />
            </li>
          )}
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;