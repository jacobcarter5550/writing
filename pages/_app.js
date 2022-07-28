import '../styles/globals.scss'
import { magic } from '../lib/magic';
import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head'
import {getUser} from '../lib/api';
import { Provider } from 'react-redux';
import { UserContext } from '../lib/UserContext';

function MyApp({ Component, pageProps, router }) {

  const [user, setUser] = useState()

  useEffect(() => {
    async function initUser () {
      const isLoggedIn = await magic.user.isLoggedIn()
        if (isLoggedIn && !router.asPath.includes('/redirect')) {
          const userData = await magic.user.getMetadata()
          const res = await getUser({userData: await userData}),
          userSynth = {
            ...userData,
            ...res.data
          }
          setUser(userSynth)

          if(userSynth.questionID.submitted == false){
            router.push('/onboarding')
          } else if(router.asPath == '/') {
            router.push('/dash')
          }
        } else {
            if(router.asPath !== '/' || router.asPath !== '/redirect' ){
              router.push('/'), setUser( null )
            } else (
              setUser( null )
            )
        }
    }
    initUser()
  }, []);

  async function logOut() {
    await magic.user.logout().then(()=>{
      router.push('/')
    })
  }

  return( 
    <UserContext.Provider value={[user, setUser]}>
      <span>
        <Head>
          <title>Publishing Pals</title>
          <meta name="description" content="Where Publishing Pals come together" />
          <link rel="icon" href="/PubPal.svg" />
        </Head>
        <Component {...pageProps} user={user} logOut={logOut} r={router} magic={magic}/>
      </span>
    </UserContext.Provider>
  )
}

export default withRouter(MyApp)
