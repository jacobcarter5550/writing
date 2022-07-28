import { useContext} from 'react'
import { UserContext } from '../lib/UserContext';
import Loading from '../components/Loading';


function dash({r,logOut}) {

    const [user, setUser, posts] = useContext(UserContext);
    
    return (<>
        {user == null || user == undefined ?
            <Loading loading={true}/> 
        :
            <div>
                <h1>Dash</h1>
                <h1>{user.name ?? user.fbData.name}</h1>
                {user.fbData.pictureURL ? 
                    <img style={{width:'50px', height: '50px'}} src={user.profile ?? user.fbData.pictureURL}/>
                :
                    <h1>We'll let you upload a picture soon!</h1>
                }
                <h1 onClick={()=>{logOut(), r.push('/')}}>Log Out</h1>
            </div>
        }
    </>)
}

export default dash