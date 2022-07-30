import { useState, useEffect, useRef } from 'react'
import Router from 'next/router'
import { magic } from '../lib/magic'
import EmailForm from './MagicEmail'
import useOutside from './function/useOutside'
import styles from '../styles/Master.module.scss'
import {Magic} from 'magic-sdk'
import { OAuthExtension } from '@magic-ext/oauth';
import Loading from './Loading'
import { getUser } from '../lib/api'
import { useCookies } from "react-cookie";
import { useContext} from 'react'
import { UserContext } from '../lib/UserContext';
import initUser from './function/initUser'

const Login = ({set, state, sol, m, r}) => {
    const [func, setFunction] = useState(),
    [login, setLogin] = useState(false),
    [disabled, setDisabled] = useState(false),
    [loading, setLoading] = useState(false),
    [userCookie, setUC, removeUC] = useCookies(['user']),
    [user, setUser, posts] = useContext(UserContext)

    function addMonths(date, months) {
        date.setMonth(date.getMonth() + months);
        return date.toUTCString();
    }

    useEffect(() => {
        const magic = new Magic('pk_live_9711D265BE922178', {
            extensions: [new OAuthExtension()],
        });
        setFunction(magic)
    }, [])

    async function handleLoginWithEmail(email) {
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
            initUser(setUser,userCookie, m, r, setUC, getUser)
            setLoading(!loading)
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
            redirectURI: 'https://www.publishingpals.xyz/redirect',
        });
    }

    return (<>
        {loading && <Loading loading={loading}/>}
        <div className={styles.login}>
            <aside >
                <h1>{sOl(sol)}!</h1>
                {!login ? 
                    <span>
                        <button onClick={()=>{setLogin(!login)}}>{sOl(sol)} with Email</button>
                        <hr />
                        <button onClick={()=>{setLoading(!loading), gotToFB()}}>{sOl(sol)} with Facebook</button>
                    </span>
                :
                    <span>
                        <EmailForm onEmailSubmit={handleLoginWithEmail} loading={loading} setLoading={setLoading}/>
                    </span>
                }
            </aside>
            <button style={{marginTop:'20px', fontFamily:'Inter'}} onClick={()=>{set(!state)}}>←</button>
        </div>
    </>
    )
};

export default Login;
