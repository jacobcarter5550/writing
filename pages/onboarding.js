import Form from "../components/Form"
import styles from '../styles/Master.module.scss'

function onboard({user, r}) {

    return (<div className={styles.form}>
        <h1>Hey! We have a couple questions!</h1>
        <Form user={user} r={r}/>
    </div>
    )
}

export default onboard