import Head from 'next/head'
import styles from '../styles/Master.module.scss'
import Lander from '../components/Lander'

function Home({user}) {

  return (
    <div className={styles.lander}>
      <section className={styles.body}>
        <Lander user={user}/>
      </section>
    </div>
  )
}

export default Home
