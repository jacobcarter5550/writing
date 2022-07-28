import { useEffect, useState } from "react";
import Loading from "./Loading"
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

function Test ({user}) {

    const [func, setFunction] = useState()

    useEffect(() => {

        const magic = new Magic('pk_live_9711D265BE922178', {
            extensions: [new OAuthExtension()],
        });
        setFunction(magic)
    }, [])
    

    async function gotToFB () {
        await func.oauth.loginWithRedirect({
            provider: 'facebook',
            redirectURI: 'https://www.publishingpals.xyz/redirect',
        });
    }

return (<>
    <Loading />
    <button onClick={()=>{gotToFB()}}>try FB</button>
    <button onClick={async ()=>{await func.user.logout()}}>logOut</button>

</>)
}

export default Test