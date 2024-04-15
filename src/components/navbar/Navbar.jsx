import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "@/components/navbar/links/Links";
import {auth} from "@/lib/auth";

const Navbar = async () => {
  const session = await auth()

  return (
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">Logo</Link>
      <Links session={session} />
    </nav>
  )
}

export default Navbar