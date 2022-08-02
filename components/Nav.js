import Link from "next/link"
import styles from '../styles/scss/Nav.module.scss'

function Nav({user, logOut}) {

  return (
    <div className={styles.nav}>
      <img src="/PubPal.svg" alt="" />
      <a href='https://www.facebook.com/groups/publishingpals' target='_blank'>FB Group</a>
      <Link href='/pals'>Pals</Link>
      <Link href='/dash'>Profile</Link>
      <p style={{cursor:'pointer'}} onClick={()=>{logOut()}}>Log Out</p>
    </div>
  )
}

export default Nav