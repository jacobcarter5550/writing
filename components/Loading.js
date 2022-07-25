import React from 'react'
import styles from '../styles/scss/Loader.module.scss'
import classNames from 'classnames'
import { useSpring, animated } from 'react-spring'

function Loading({loading}) {

    const load = useSpring({
        display : loading ? '' : 'none'
    })

    return (
    <animated.div style={load} className={styles.frame}>
        <div className={styles.inner}>
            <div className={styles.item}>
                <i className={classNames([styles.loader, styles.loader8])}></i>
            </div>
        </div>
    </animated.div>
    )
}

export default Loading