import Head from 'next/head'
import styles from '../styles/Master.module.scss'
import Lander from '../components/Lander'

function Home({user}) {

  return (
    <div className={styles.lander}>
      <Head>
        <title>Publishing Pals</title>
        <meta name="description" content="Where all the Publishing Pals come together" />
        <link rel="icon" href="/PubPal.svg" />
      </Head>
      <section className={styles.body}>
        <Lander user={user}/>
      </section>
    </div>
  )
}

export default Home
