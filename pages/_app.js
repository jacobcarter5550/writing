import '../styles/globals.css'
import { magic } from '../lib/magic';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState()

  useEffect(() => {
    async function initUser () {
      // setUser({ loading: true });
      const isLoggedIn = await magic.user.isLoggedIn()
      console.log(isLoggedIn)
        if (isLoggedIn) {
          const userData = await magic.user.getMetadata()
          const userInfo ={
            'id':userData.publicAddress,
            'email':userData.email
          }
          console.log(userInfo)
          // // const res = await getUser(userInfo)
          // userData['data'] = res
          setUser(userData)
        } else {
            if(router.asPath == '/dash' ){
              Router.push('/'), setUser( null )
            } else (
              setUser( null )
            )
        }
    }
    initUser()
  }, [process]);

  return <Component {...pageProps} user={user} />
}

export default MyApp
