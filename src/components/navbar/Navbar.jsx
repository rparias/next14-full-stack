import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <a href="/">Logo</a>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar