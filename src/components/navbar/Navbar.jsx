"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import NavLink from "./navLink/NavLink"
import styles from "./navbar.module.css"

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

// Temp roles
const session = true
const isAdmin = true

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">Logo</Link>
      <ul className={styles.links}>
        {links.map(link => <NavLink key={link.title} item={link} />)}
        {session ? (
          <>
            { isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} /> }
            <button className={styles.logout}>Logout</button>
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
            {session ? (
              <>
                { isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} /> }
                <button className={styles.logout}>Logout</button>
              </>
            ) : (
              <NavLink item={{ title: "Login", path: "/login" }} />
            )}
          </ul>
        )
      }
    </nav>
  )
}

export default Navbar