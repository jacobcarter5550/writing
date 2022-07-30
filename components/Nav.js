import Link from "next/link"
import styles from '../styles/scss/Nav.module.scss'

function Nav({}) {

  return (
    <div className={styles.nav}>
      <img src="/PubPal.svg" alt="" />
      <Link href='/docs'>Docs</Link>
      <Link href='/pals'>Pals</Link>
      <Link href='/profile'>Profile</Link>
    </div>
  )
}

export default Nav