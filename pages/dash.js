import { useContext} from 'react'
import { UserContext } from '../lib/UserContext';
import Loading from '../components/Loading';
import styles from '../styles/Master.module.scss'

function dash({r,logOut}) {
    const [user, setUser, posts] = useContext(UserContext);

    const tag = {backgroundColor: '#2E2E2F', border: '1px solid #C59F5D', boxShadow: '0px 0px 20px rgba(236, 229, 233, 0.25)', color:'#9ABD76',transition: 'all ease-in-out .2s'}

    return (<>
        {user == null || user == undefined ?
            <Loading loading={true}/> 
        :
            <div className={styles.profile}>
                <span >
                    <h1>{user.name}</h1>
                    <img style={{width:'50px', height:'50px',borderRadius:'6px', marginLeft:'5%'}} src={user.fbData.pictureURL} alt="" />
                </span>
                <span >
                    <h3 onClick={()=>{r.push('/pals')}}>←</h3>
                    <div >
                        <h3>Intro</h3>
                        <p>{user.questionID.first}</p>
                    </div>
                    <aside >
                        <h3>Interests</h3>
                        <article className={styles.tags} >
                            {user.questionID.interest_tags.map((item)=>{
                                return <p style={tag}>{item}</p>
                            })}
                        </article>
                    </aside>
                </span>
            </div>
        }
    </>)
}

export default dash