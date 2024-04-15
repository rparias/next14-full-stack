"use client"

import styles from "@/components/navbar/navbar.module.css";
import NavLink from "@/components/navbar/navLink/NavLink";
import Image from "next/image";
import {handleGithubLogout} from "@/lib/actions";
import {useState} from "react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
]

const Links = ({session}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  // Temp roles
  const isAdmin = true

  return (
    <>
      <ul className={styles.links}>
        {links.map(link => <NavLink key={link.title} item={link} />)}
        {session?.user ? (
          <>
            { session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} /> }
            <form action={handleGithubLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </ul>
      <button className={styles.menuButton} onClick={() => setIsOpen((prevState) => !prevState)}>
        <Image src="/menu.png" alt="menu" width={30} height={30} />
      </button>
      {
        isOpen && (
          <ul className={styles.mobileLinks}>
            {links.map(link => <NavLink key={link.title} item={link} />)}
            {session?.user ? (
              <>
                { session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} /> }
                <form action={handleGithubLogout}>
                  <button className={styles.logout}>Logout</button>
                </form>
              </>
            ) : (
              <NavLink item={{ title: "Login", path: "/login" }} />
            )}
          </ul>
        )
      }
    </>
  );
};

export default Links