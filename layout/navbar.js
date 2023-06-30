import Link from "next/link"
import syl from "~/layout/navbar.module.css"

export default function Layout_Navbar() {
  return (
    <header className={syl.header}>
      <div className={"response "+syl.links}>
        <Link href="/">Beranda</Link>
        <Link href="/explorer-maps?utm_source=navbar-pages">Explorer Maps</Link>
      </div>
    </header>
  )
}