import styles from '../styles/Master.module.scss'
import Login from '../components/LoginModal'
import { useState } from 'react'

function Lander({user, m, r}) {

    const [ focus, set ] = useState(false)
    const [ sol, setSol ] = useState()

    function flashLogin (arg){
        setSol(arg)
        set(!focus)
    }

    return (<>
        <img src="/PubPal.svg" alt="" />
        <h1 style={{marginBottom:'10%'}}>Welcome to Publishing Pals</h1>
        {focus ? 
            <Login set={set} state={focus} sol={sol} m={m} r={r}/> 
        : 
            <span>
                <button onClick={()=>{flashLogin('s')}}>Login!</button>
                <hr />
                <button style={{color:'#C59F5D'}} onClick={()=>{flashLogin('o')}}>Sign Up</button>
            </span>
        }
    </>)
}

export default Lander