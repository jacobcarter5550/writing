import styles from '../styles/Master.module.scss'
import Login from '../components/LoginModal'
import { useState } from 'react'

function Lander({user}) {

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
            <Login set={set} state={focus} sol={sol}/> 
        : 
            <span>
                <button onClick={()=>{flashLogin('o')}}>Sign Up</button>
                <hr />
                <button onClick={()=>{flashLogin('s')}}>Login!</button>
            </span>
        }
    </>)
}

export default Lander