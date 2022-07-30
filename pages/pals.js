import { useEffect, useState } from 'react'
import UserObject from '../components/UserObject'
import { getPals } from '../lib/api'
import styles from '../styles/Master.module.scss'


function pals ({user}) {

    const [userList, setUserList] = useState([])
    console.log(user,66)

    useEffect(()=>{
        if (user) {
            async function getSort () {
                const res = await getPals()
                console.log(res)
                const userFilter = res.filter((users)=> !users.testAccount == true)
                .filter((users) => users.id !== user?.id)
                setUserList(userFilter)
            }   
            getSort()
        }
    },[user])


    return (
        <div className={styles.pals}>
            <h1>User</h1>
            {userList.map((item, ind)=>{
                return <span key={ind}><UserObject data={item}/></span>
            })}
        </div>
    )
}




export default pals