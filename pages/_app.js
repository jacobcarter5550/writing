import '../styles/globals.scss'
import { magic } from '../lib/magic';
import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head'
import {getUser} from '../lib/api';
import { UserContext } from '../lib/UserContext';
import { CookiesProvider, useCookies } from "react-cookie";
import initUser from '../components/function/initUser';
import outUser from '../components/function/outUser';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps, router }) {

  const [user, setUser] = useState()

  const [userCookie, setUC, removeUC] = useCookies(['user'])

useEffect(() => {
  if(!router.asPath.includes('redirect')){
      initUser(setUser,userCookie, magic, router, setUC, getUser)
    }
  }, []);

  function logOut () {
    outUser(magic, router, removeUC)
  }

  const ifRoute = (router.asPath !== '/' && !router.asPath.includes('redirect') && router.asPath !== '/onboarding') ? true : false

  return(
    <CookiesProvider>
      <UserContext.Provider value={[user, setUser]}>
        <span style={{display: ifRoute ?'flex' : ''}}>
          <Head>
            <title>Publishing Pals</title>
            <meta name="description" content="Where Publishing Pals come together" />
            <link rel="icon" href="/PubPal.svg" />
          </Head>
          {ifRoute && <Nav user={user} logOut={logOut}/> }
          <Component {...pageProps} user={user} logOut={logOut} r={router} m={magic}/>
        </span>
      </UserContext.Provider>
    </CookiesProvider>
  )
}

export default withRouter(MyApp)
