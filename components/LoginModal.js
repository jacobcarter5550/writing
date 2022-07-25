import { useState, useContext, useRef } from 'react'
import Router from 'next/router'
import { magic } from '../lib/magic'
import EmailForm from './MagicEmail'
import useOutside from './function/useOutside'
import styles from '../styles/Master.module.scss'
import Link from 'next/link'

const Login = ({set, state, sol}) => {

    const [login, setLogin] = useState(false)

    const [disabled, setDisabled] = useState(false);

    async function handleLoginWithEmail(email) {
        try {
            setDisabled(true);
            let didToken = await magic.auth.loginWithMagicLink({
                email,
            });

            const res = await fetch('/api/magic/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + didToken,
                },
            });
            if (res.status == 200) {
                const userData = await magic.user.getMetadata()
                const userInfo ={
                    'id': userData.publicAddress,
                    'email': userData.email
                }
                const account = await getUser(userInfo)
                userData["data"] = account
                setUser(userData)
                set(!state)
            }
        } catch (error) {
            setDisabled(false);
        }
    }

    // const animo = useSpring({
    //     config: { duration: 100 },
    //     opacity: state ? 1: 0,
    //     width:'100vw', top: 0, height:'100vh',position: 'absolute', zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0.5)'
    // })
    function sOl (arg) {
        switch (arg) {
            case 'o':
                return 'Sign Up'
            case 'l' :
                return 'Log In'
            default :
                return 'Log In'
        }
    }

    const modal = useRef()
    useOutside(modal, ()=>{set(!state)}, null)

    async function loginWithFB () {
        await magic.oauth.loginWithRedirect({
            provider: 'facebook',
            redirectURI: 'https://your-app.com/your/oauth/callback',
        });
    }

    return (<>
        <div className={styles.login}>
            <aside >
                <h1>{sOl(sol)}!</h1>
                {!login ? 
                    <span>
                        <button onClick={()=>{setLogin(!login)}}>{sOl(sol)} with Email</button>
                        <hr />
                        <button ><Link href='/'>{sOl(sol)} with Facebook</Link></button>
                    </span>
                :
                    <span>
                        <EmailForm onEmailSubmit={handleLoginWithEmail}/>
                    </span>
                }
            </aside>
            <button style={{marginTop:'20px', fontFamily:'Inter'}} onClick={()=>{set(!state)}}>←</button>
        </div>
    </>
    )
};

export default Login;
