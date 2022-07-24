import '../styles/globals.scss'
import { magic } from '../lib/magic';
import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {

  const [user, setUser] = useState()

  useEffect(() => {
    async function initUser () {
      // setUser({ loading: true });
      const isLoggedIn = await magic.user.isLoggedIn()
      console.log(isLoggedIn,22)
        if (isLoggedIn) {
          const userData = await magic.user.getMetadata()
          const userInfo ={
            'id':userData.publicAddress,
            'email':userData.email
          }
          console.log(userData,44)
          setUser(userData)
          router.push('/dash')
        } else {
            if(router.asPath !== '/' ){
              router.push('/'), setUser( null )
            } else (
              setUser( null )
            )
        }
    }
    initUser()
  }, [process]);

  async function logOut() {
    await magic.user.logout().then(()=>{
      router.push('/')
    })
  }

  return( 
    <span>
      <Head>
        <title>Publishing Pals</title>
        <meta name="description" content="Where Publishing Pals come together" />
        <link rel="icon" href="/PubPal.svg" />
      </Head>
      <Component {...pageProps} user={user} logOut={logOut}/>
    </span>
  )
}

export default withRouter(MyApp)
