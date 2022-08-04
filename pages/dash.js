import { useContext, useState, useEffect} from 'react'
import { UserContext } from '../lib/UserContext';
import Loading from '../components/Loading';
import styles from '../styles/scss/Dash.module.scss'
import {topics} from '../components/function/topics'
import { updateUserForm } from '../lib/api';

function dash({r,logOut}) {
    const [user, setUser, posts] = useContext(UserContext);
    const [edit, setEdit] = useState(false)
    const [cancel, setCan] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({})
    const [saving, setSaving] = useState(false)
    const [testing, settesing] = useState()

    const tag = {backgroundColor: '#2E2E2F', border: '1px solid #C59F5D', boxShadow: '0px 0px 20px rgba(236, 229, 233, 0.25)', color:'#9ABD76',transition: 'all ease-in-out .2s'}

    const isDisabled = (
        formData?.name?.length <=0 || 
        formData.first?.length <=0 || 
        formData.second?.length <=0 ||
        formData.third?.length <=0 ||
        formData.sixth?.length <=0 ||
        formData.nineth?.length <=0 
        ) ? true : false

    useEffect(()=>{
        setFormData({interest_tags: user?.questionID.interest_tags, name: user?.name})
    },[user])

    useEffect(()=>{
        async function godd (user, form) {
            setLoading(!loading)
            const res = updateUserForm({
                userData : user,
                form:form
            })
            const god = await res.then(data=>{return data})
            console.log(god)
            if(god.status == 200) {
                console.log(testing)
                settesing('this')
                console.log(testing)
            }
        }
        if(saving){
            godd(user,formData)

        }
    },[saving])

    function save (user, form, sL, sU) {
        sL(!loading)
        updateUserForm({
            userData : user,
            form:form
        }).then((data)=>{
            if(data.status == 200){
                console.log('here'),
                window.location.reload(false)
            }
        })
    }

    function setNew (event, position) {
        setFormData((prevState)=>({
            ...prevState,
                [position] : event.target.value,
        }))
    }

    function isNull (data, position) {
        if(edit) {
            return <textarea onChange={(e)=>{setNew(e, position)}} defaultValue={data ?? null} placeholder='Edit your info here!'/>
        } else {
            if (data) {
                return <p>{data}</p>
            } else {
                return <textarea placeholder={`Hey you didn't answer this; go ahead now!`}/>
            }
        }
    }

    const highlight = {
        backgroundColor: '#2E2E2F', border: '1px solid #C59F5D', boxShadow: '0px 0px 20px rgba(236, 229, 233, 0.25)', color:'#9ABD76',transition: 'all ease-in-out .2s'
    }

    function isFilled (obj) {
        return user.questionID[obj] == undefined ? '#9ABD76' : '#C59F5D'
    }

    function require (edit) {
        if (edit) {
            return <span>-- *</span>
        } else {
            return <span></span>
        }
    }


    return (<>

        {user == null || user == undefined ?
            <Loading loading={true}/> 
        :<>
            {loading && <Loading loading={loading}/>}
            <div className={styles.profile}>
                <aside >
                    <h3 onClick={()=>{r.push('/pals')}}>←</h3>
                    <h1>{user.name}</h1>
                    <img src={user.fbData.pictureURL} alt="" />
                    {!edit ? 
                        <button onClick={()=>{setEdit(!edit)}}>Edit</button>
                        : !cancel ?
                        <>
                                <button disabled={isDisabled} onClick={()=>{save(user, formData, setLoading, r)}}>Save</button>
                                <button onClick={()=>{setCan(!cancel)}}>Cancel</button>
                            </>
                        :
                        <>
                                <p>You sure?</p>
                                <button onClick={()=>{setEdit(!edit)}}>Yes</button>
                                <button onClick={()=>{setCan(!cancel)}}>No</button>
                            </>
                    }
                </aside>
                <article >
                    <span >
                        <div >
                            <h3 style={{color:isFilled('first')}}>Intro{require(edit)}</h3>
                            {isNull(user.questionID.first, 'first')}
                        </div>
                        <div >
                            <h3 style={{color:isFilled('interest_tags')}}>Interests</h3>
                            <article style={{width:'125%'}} className={styles.tags} >
                                {edit ? 
                                    <>
                                        {topics.map((item)=>{
                                            function setOAdd() {
                                                if(formData.interest_tags.includes(item)) {
                                                    const removed = formData.interest_tags.filter((one)=>one !== item)
                                                    setFormData(prevState=>({
                                                        ...prevState,
                                                        interest_tags : removed
                                                    }))
                                                } else {
                                                    if(formData.interest_tags.length < 5){
                                                        setFormData(prevState=>({
                                                            ...prevState,
                                                            interest_tags : [...prevState.interest_tags, item]
                                                        }))
                                                    }
                                                }
                                            }
                                            const chosen = formData?.interest_tags.includes(item) ? highlight : {}
                                            return <p onClick={()=>{setOAdd()}} style={chosen}>{item}</p>
                                        })}
                                    </> 
                                : 
                                <>
                                        {user.questionID.interest_tags.map((item)=>{
                                            return <p style={tag}>{item}</p>
                                        })}
                                    </>
                                }
                            </article>
                        </div>
                    </span>
                    <div>
                        <h3 style={{color:isFilled('second')}}>What topics do you plan to write about? (In detail){require(edit)}</h3>
                        {isNull(user.questionID.second, 'second')}
                    </div>
                    <div>
                        <h3 style={{color:isFilled('third')}}>What will your first post be about?{require(edit)}</h3>
                        {isNull(user.questionID.third,'third')}
                    </div>
                    <span>
                        <div>
                            <h3 style={{color:isFilled('fourth')}}>What are your strengths as a writer?</h3>
                            {isNull(user.questionID.fourth,'fourth')}
                        </div>
                        <div>
                            <h3 style={{color:isFilled('fifth')}}>What are your weaknesses as a writer?</h3>
                            {isNull(user.questionID.fifth,'fifth')}
                        </div>
                    </span>
                    <div>
                        <h3 style={{color:isFilled('sixth')}}>What are your goals for the group?{require(edit)}</h3>
                        {isNull(user.questionID.sixth,'sixth')}
                    </div>
                    <span>
                        <div>
                            <h3 style={{color:isFilled('seventh')}}>How many blog posts have you written?</h3>
                            {isNull(user.questionID.seventh,'seventh')}
                        </div>
                        <div>
                            <h3 style={{color:isFilled('eigtht')}}>Where will you be publishing?</h3>
                            {isNull(user.questionID.eigtht,'eigtht')}
                        </div>
                    </span>
                    <span>
                        <div>
                            <h3 style={{color:isFilled('nineth')}}>How can the group help you?{require(edit)}</h3>
                            {isNull(user.questionID.nineth,'nineth')}
                        </div>
                        <div>
                            <h3 style={{color:isFilled('tenth')}}>Who are your favorite writers?</h3>
                            {isNull(user.questionID.tenth,'tenth')}
                        </div>
                    </span>
                </article>
            </div>
        </>
        }
    </>)
}

export default dash