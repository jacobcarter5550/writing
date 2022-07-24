import '../styles/globals.scss'
import { magic } from '../lib/magic';
import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';

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
          console.log(userInfo)
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

  return( 
    <span>
      <Component {...pageProps} user={user} />
    </span>
  )
}

export default withRouter(MyApp)
