import { useState, useRef } from 'react';
import styles from '../styles/Master.module.scss'
// import useOutside from './Functions/useOutside';
// import LoadingSmall from './LoadingSmall'
// import useKeyPres from './Functions/useKeyPres';

const EmailForm = ({ onEmailSubmit, disabled, set, state }) => {
    const [ email, setEmail] = useState('')
    const [ loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        onEmailSubmit(email);
    };


    // useOutside(modalRef, ()=>{set(!state), setLoading(false)})

    function load () {
        setLoading(!loading)
    }

    return (<>
        <div className={styles.login}>
            <form  onSubmit={handleSubmit}>
                <div >
                    <input
                        placeholder='Enter your email'
                        size='sm'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <hr></hr>
                <div>
                    <button 
                        disabled={disabled}
                        onClick={(e)=>{handleSubmit(e), load()}}>
                        Login with Email
                    </button>
                </div>
            </form>
        </div>
    </>);
};

export default EmailForm;