import { useState, useContext } from 'react'
import Router from 'next/router'
import { magic } from '../lib/magic'
// import { UserContext } from '../../lib/UserContext'
import EmailForm from './MagicEmail'
// import { getUser } from '../../lib/api'
// import { useSpring, animated } from 'react-spring'

const Login = ({set, state}) => {
    const [disabled, setDisabled] = useState(false);
    // const [user, setUser] = useContext(UserContext);

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
                Router.push('/dash')
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

    return (<>
        <div >
            <EmailForm onEmailSubmit={handleLoginWithEmail}/>
            <button ><a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=755009882616585&kid_directed_site=0&app_id=755009882616585&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv8.0%2Fdialog%2Foauth%3Fclient_id%3D%2B755009882616585%26redirect_uri%3Dhttps%253A%252F%252Fauth.magic.link%252Fv1%252Foauth2%252FexVnyOPIPIEWfrSlwzKKdqvO04M0s5pUQcmfH7OahiQ%253D%252Fcallback%26state%3Dmg1UPpiAcjKMSihyS.xIKmALqZnZ0w6D95OKZTckokZaJ3rALMupA5FZ5drnFBa2QlBQnxN9Qt6eqGbR1yh6qqwrsDKqZ2XcziYzibDs9C4mi6b9cofo-duwxdotYMkJ%26scope%3Demail%26response_type%3Dcode%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dc6425676-b100-41a6-95ce-9e8984601afc%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fauth.magic.link%2Fv1%2Foauth2%2FexVnyOPIPIEWfrSlwzKKdqvO04M0s5pUQcmfH7OahiQ%3D%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dmg1UPpiAcjKMSihyS.xIKmALqZnZ0w6D95OKZTckokZaJ3rALMupA5FZ5drnFBa2QlBQnxN9Qt6eqGbR1yh6qqwrsDKqZ2XcziYzibDs9C4mi6b9cofo-duwxdotYMkJ%23_%3D_&display=page&locale=en_US&pl_dbl=0'>Log in w Facebook</a></button>
        </div>
    </>
    )
};

export default Login;
