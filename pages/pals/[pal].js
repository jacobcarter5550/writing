import { useEffect, useState } from 'react'
import { getPals } from '../../lib/api'
import { useDispatch,useSelector } from 'react-redux'
import styles from '../../styles/Master.module.scss'
import { getUser } from '../../lib/api'


function pal ({user ,r}) {

    const [selected, setSelected] = useState()

    useEffect(()=>{
        const id = r._inFlightRoute.split('/')[2]?.split('?')[0]
        async function getIt () {
            const res = await getUser({userData: {publicAddress : id}})
            setSelected(res.data)
        }

        getIt()
    },[])

    const name = ((r.query['user'] ?? 'Loading') || selected.name)

    const tag = {backgroundColor: '#2E2E2F', border: '1px solid #C59F5D', boxShadow: '0px 0px 20px rgba(236, 229, 233, 0.25)', color:'#9ABD76',transition: 'all ease-in-out .2s'}

    return (
        <div className={styles.profile}>
            <span >
                <h1>{name}</h1>
                <img style={{width:'50px', height:'50px',borderRadius:'6px', marginLeft:'5%'}} src={selected?.fbData.pictureURL} alt="" />
            </span>
            <span >
                <h3 onClick={()=>{r.push('/pals')}}>←</h3>
                <div >
                    <h3>Intro</h3>
                    <p>{selected?.questionID.first}</p>
                </div>
                <aside>
                    <h3>Interests</h3>
                    <article className={styles.tags} >
                        {selected?.questionID.interest_tags.map((item)=>{
                            return <p style={tag}>{item}</p>
                        })}
                    </article>
                </aside>
            </span>
        </div>
    )
}


export default pal