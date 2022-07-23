import { useState, useRef } from 'react';
import { Icon, MonochromeIcons, CallToAction } from '@magiclabs/ui';
import styles from '../styles/Master.module.css'
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
                <h3>Login</h3>
                <div >
                    <input
                        placeholder='Enter your email'
                        size='sm'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        prefix={<Icon inline type={MonochromeIcons.Envelope} size={22} />}
                    />
                </div>
                <div>
                    <CallToAction
                        leadingIcon={MonochromeIcons.PaperPlane}
                        color='primary'
                        size='sm'
                        disabled={disabled}
                        onClick={(e)=>{handleSubmit(e), load()}}
                    >Send login link
                    </CallToAction>
                </div>
            </form>
        </div>
    </>);
};

export default EmailForm;