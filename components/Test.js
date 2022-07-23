import Login from "./LoginModal"
import magic from '../lib/magic'

function Test ({user}) {
console.log(user)
    function logOut() {
        magic.user.logout().then(() => {
            setUser( null );
            Router.push('/');
        });
    }
return (<>
    <h1>Here</h1>
    <Login />
    <button onClick={()=>{logOut()}}>log me out</button>
</>)
}

export default Test