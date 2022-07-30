import Head from 'next/head'
import styles from '../styles/Master.module.scss'
import Lander from '../components/Lander'

function Home({user, logOut, m, r}) {
  
  return (
    <div className={styles.lander}>
      <section className={styles.body}>
        {user !== null || user !== undefined ?
          <Lander user={user} m={m} r={r}/>
        :
          <h1 onClick={()=>{logOut()}}>Log Out</h1>
        }
      </section>
    </div>
  )
}

export default Home
