import { useState, useEffect, useRef } from 'react'
import Router from 'next/router'
import { magic } from '../lib/magic'
import EmailForm from './MagicEmail'
import useOutside from './function/useOutside'
import styles from '../styles/Master.module.scss'
import Link from 'next/link'
import {Magic} from 'magic-sdk'
import { OAuthExtension } from '@magic-ext/oauth';

const Login = ({set, state, sol}) => {
    const [func, setFunction] = useState()
    const [login, setLogin] = useState(false)
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const magic = new Magic('pk_live_9711D265BE922178', {
            extensions: [new OAuthExtension()],
        });
        setFunction(magic)
    }, [])

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

    async function gotToFB () {
        await func.oauth.loginWithRedirect({
            provider: 'facebook',
            redirectURI: 'https://www.publishingpals.xyz//redirect',
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
                        <button onClick={()=>{gotToFB()}}>{sOl(sol)} with Facebook</button>
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
