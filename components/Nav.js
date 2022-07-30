import Link from "next/link"
import styles from '../styles/scss/Nav.module.scss'

function Nav({user, logOut}) {

  return (
    <div className={styles.nav}>
      <img src="/PubPal.svg" alt="" />
      <Link href='https://www.facebook.com/groups/publishingpals'>Home</Link>
      <Link href='/pals'>Pals</Link>
      <Link href='/dash'>Profile</Link>
      <p style={{cursor:'pointer'}} onClick={()=>{logOut()}}>Log Out</p>
    </div>
  )
}

export default Nav