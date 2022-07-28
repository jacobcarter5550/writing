import {useState, useEffect, useContext} from 'react'
import { UserContext } from '../lib/UserContext';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { setFBUser } from '../lib/api';
import Loading from '../components/Loading';


function redirect({r}) {
    const [ress, setRes ] = useState()
    const [func, setFunc] = useState()
    const [user, setUser, posts] = useContext(UserContext);


    useEffect(() => {
        const magic = new Magic('pk_live_9711D265BE922178', {
            extensions: [new OAuthExtension()],
        });
        setFunc(magic)
        async function tryGetResult () {
            async function handleRedir () {
                try {
                    return await magic?.oauth.getRedirectResult();
                } catch (error) {
                    console.log(error)
                }
            }
            const result = await handleRedir()

            if(result) {
                setRes(result)
                const res = await setFBUser(result)
                const userData = await magic.user.getMetadata(),
                    userSynth = {
                        ...userData,
                        ...res
                    }
                setUser(userSynth)
                if(userSynth.questionID.submitted == false){
                    r.push({
                        pathname: '/onboarding',
                        query: { name: userSynth.fbData.name },
                    })
                } else {
                    r.push('/dash')
                }
            }
        }
        tryGetResult()
    }, [])
    

    return (
        <Loading loading={true}/>
    )
}

export default redirect