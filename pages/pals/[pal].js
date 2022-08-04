import { useEffect, useState } from 'react'
import { getPals } from '../../lib/api'
import { useDispatch,useSelector } from 'react-redux'
import styles from '../../styles/scss/Dash.module.scss'
import { getUser } from '../../lib/api'
import Head from 'next/head'

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

    return (<>
        <Head>
            <style>{`body { color: #C59F5D !important; }`}</style>
        </Head>
        <div className={styles.profile}>
            <aside >
                <h3 onClick={()=>{r.push('/pals')}}>←</h3>
                <h1>{name}</h1>
                <img src={selected?.fbData.pictureURL} />
            </aside>
            <article >
                <span >
                    {selected?.questionID.fifth && <div >
                        <h3 >Intro</h3>
                        {selected?.questionID.first}
                    </div>}
                    <div >
                        <h3 >Interests</h3>
                        <article style={{width:'125%'}} className={styles.tags} >
                            {
                                selected?.questionID.interest_tags.map((item)=>{
                                    return <p style={tag}>{item}</p>
                                })
                            }
                        </article>
                    </div>
                </span>
                {selected?.questionID.second && <div>
                    <h3 >What topics do you plan to write about? (In detail)</h3>
                    {selected?.questionID.second }
                </div>}
                {selected?.questionID.third &&  <div>
                    <h3 >What will your first post be about?</h3>
                    {selected?.questionID.third}
                </div>}
                <span>
                    {selected?.questionID.fourth && <div>
                        <h3 >What are your strengths as a writer?</h3>
                        {selected?.questionID.fourth}
                    </div>}
                    {selected?.questionID.fifth && <div>
                        <h3 >What are your weaknesses as a writer?</h3>
                        {selected?.questionID.fifth}
                    </div>}
                </span>
                {selected?.questionID.sixth && <div>
                    <h3 >What are your goals for the group?</h3>
                    {selected?.questionID.sixth}
                </div>}
                <span>
                    {selected?.questionID.seventh && <div>
                        <h3 >How many blog posts have you written?</h3>
                        {selected?.questionID.seventh}
                    </div>}
                    {selected?.questionID.eigtht && <div>
                        <h3 >Where will you be publishing?</h3>
                        {selected?.questionID.eigtht}
                    </div>}
                </span>
                <span>
                    {selected?.questionID.nineth && <div>
                        <h3 >How can the group help you?</h3>
                        {selected.questionID.nineth}
                    </div>}
                    {selected?.questionID.tenth && <div>
                        <h3 >Who are your favorite writers?</h3>
                        {selected?.questionID.tenth}
                    </div>}
                </span>
            </article>
        </div>
    </>)
}


export default pal