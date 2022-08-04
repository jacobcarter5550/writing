import { useEffect, useState } from 'react'
import UserObject from '../../components/UserObject'
import { getPals } from '../../lib/api'
import styles from '../../styles/Master.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../redux/allActions'


function index ({user, r}) {

    const [userList, setUserList] = useState([])

    const dispatch = useDispatch()
    const { addToList } = bindActionCreators(actionCreators,dispatch)

    useEffect(()=>{
        if (user) {
            async function getSort () {
                const res = await getPals()
                const userFilter = res.filter((users)=> !users.testAccount == true)
                addToList(userFilter)
                setUserList(userFilter)
            }   
            getSort()
        }
    },[user])

    return (
        <div className={styles.pals}>
            <h1>Users</h1>
            <aside style={{display:'flex', width:'95%',flexWrap:'wrap', justifyContent:'space-between'}}>
                {userList.map((item)=>{
                    return <UserObject user={user} data={item} r={r}/>
                })}
            </aside>
        </div>
    )
}




export default index