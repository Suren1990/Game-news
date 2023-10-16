import cn from "classnames";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    if (!matches) {
      setIsOpenMenu(false);
    }
  }, [matches]);

  const openCloseeMenu = () => {
    if (matches) {
      setIsOpenMenu((prev) => !prev);
    } else {
      setIsOpenMenu(false);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header__inner} container`}>
          <Link className={styles.header__logo} to="/">
            LOGO
          </Link>
          <nav className={cn(styles.nav, { [styles.nav__opened]: isOpenMenu })}>
            <NavLink
              className={(navData) =>
                cn(styles.nav__item, { [styles.active]: navData.isActive })
              }
              to="/"
              onClick={openCloseeMenu}
            >
              Home
            </NavLink>
            <NavLink
              className={(navData) =>
                cn(styles.nav__item, { [styles.active]: navData.isActive })
              }
              to="/events"
              onClick={openCloseeMenu}
            >
              Events
            </NavLink>
            <NavLink
              className={(navData) =>
                cn(styles.nav__item, { [styles.active]: navData.isActive })
              }
              to="/posts"
              onClick={openCloseeMenu}
            >
              Posts
            </NavLink>
            <NavLink
              className={(navData) =>
                cn(styles.nav__item, { [styles.active]: navData.isActive })
              }
              to="/contact-us"
              onClick={openCloseeMenu}
            >
              Contact us
            </NavLink>
          </nav>
          <div
            className={cn(styles.nav__burger, {
              [styles.nav__burger_active]: isOpenMenu,
            })}
            onClick={openCloseeMenu}
          >
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
