import {useState, } from 'react'
import styles from '../styles/Master.module.scss'
import { updateUserForm } from '../lib/api'
import Loading from './Loading'
import { useContext} from 'react'
import { UserContext } from '../lib/UserContext';

function Form({r}) {
    const [user, setUser, posts] = useContext(UserContext)

    const value = r.state?.query.name ?  r.state.query.name : null

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({interest_tags:[], name: value})

    const topics = ['Web3', 'Crypto', 'Future of Work', 'Product Management', 'Dating', 'Advice', 'Software Development', 'Startups', 'Short Stories', 'Habit Optimization', 'Open Learning', 'Artificial Intelligence', 'Fitness', 'Diet', 'YouTube', 'Twitter', 'Social Media', 'Machine Learning', 'Hardware Development', 'Graphic Design', 'Cooking', 'Art', 'Poetry', 'Creative Writing', 'Traveling', 'Nomading', 'Animation', 'Data Science', 'Bio-Science', 'Climate Change', 'Neuro-Tech', ]

    function isFilled (obj) {
        return formData[obj] == undefined ? '#9ABD76' : '#C59F5D'
    }

    function setNew (event, position) {
        setFormData((prevState)=>({
            ...prevState,
                [position] : event.target.value,
        }))
    }

    const isDisabled = (
        formData.name == ("" || undefined ) || 
        formData.first == ("" || undefined ) || 
        formData.second == ("" || undefined ) ||
        formData.third == ("" || undefined ) ||
        formData.sixth == ("" || undefined ) ||
        formData.nineth == ("" || undefined ) 
        ) ? true : false

    async function updateForm (user, form) {
        setLoading(!loading)
        const res = await updateUserForm({
            userData : user,
            form:form
        })
        if(res.status == 200){ 
            user['name'] = formData.name
            setUser(user)
            r.push('/dash')
        } else{ 
            alert('oh boy')
        }
    }

    return (
        <>
            <Loading loading={loading}/>
            <h3 style={{color:isFilled('first')}}>Write a little about yourself!<span>*</span></h3>
            <span style={{display:'flex', justifyContent:'initial', alignItems: 'center'}}> 
                <h3 style={{color:isFilled('name')}}><span style={{marginLeft:'0px', marginRight:'5px' }}>*</span>Name :</h3>
                <input onChange={(e)=>{setNew(e,'name')}} type="text" placeholder='Me llamo' value={value}/>
            </span>
            <textarea rows="3" placeholder='Introduction' onChange={(e)=>{setNew(e,'first')}}/>
            <h3 style={{color:isFilled('first')}}>What are some topics that intrest you? (Choose up to six)</h3>
            <aside className={styles.tags}>
                {topics.map((item, ind)=>{
                    function setOAdd() {
                        if(formData.interest_tags.includes(item)) {
                            const removed = formData.interest_tags.filter((one)=>one !== item)
                            setFormData(prevState=>({
                                ...prevState,
                                interest_tags : removed
                            }))
                        } else {
                            if(formData.interest_tags.length < 6){
                                setFormData(prevState=>({
                                    ...prevState,
                                    interest_tags : [...prevState.interest_tags, item]
                                }))
                            }
                        }
                    }
                    const selceted = formData.interest_tags.includes(item) ? {backgroundColor: '#2E2E2F', border: '1px solid #C59F5D', boxShadow: '0px 0px 20px rgba(236, 229, 233, 0.25)', color:'#9ABD76',transition: 'all ease-in-out .2s'} : {transition: 'all ease-in-out .2s'}
                    return <p key={ind} style={selceted} onClick={()=>{setOAdd()}}>{item}</p>})
                }
            </aside>
            <button onClick={()=>{setFormData(prevState=>({...prevState,interest_tags : []}))}} style={{marginTop:'20px', opacity :formData.interest_tags.length > 0 ? '1' : '0'}}>Clear</button>
            <h3 style={{color:isFilled('second')}}>What topics do you plan to write about? (Detailed)<span>*</span></h3>
            <textarea rows="3" placeholder={`Be as detailed as you'd like :)`} onChange={(e)=>{setNew(e,'second')}}/>
            <h3 style={{color:isFilled('third')}}>What will your first post be about?<span>*</span></h3>
            <textarea rows="3" placeholder='First topic?' onChange={(e)=>{setNew(e,'third')}}/>
            <span>
                <section>
                    <h3 style={{color:isFilled('fourth')}}>What are your strengths as a writer?</h3>
                    <textarea rows="3" placeholder='Talk about your strengths!' onChange={(e)=>{setNew(e,'fourth')}}/>
                </section>
                <section>
                    <h3 style={{color:isFilled('fifth')}}>What are your weaknesses as a writer?</h3>
                    <textarea rows="3" placeholder='Where could you improve?' onChange={(e)=>{setNew(e,'fifth')}}/>
                </section>
            </span>
            <h3 style={{color:isFilled('sixth')}}>What are your goals for the group?<span>*</span></h3>
            <textarea rows="3" placeholder='What do you want out of this?' onChange={(e)=>{setNew(e,'sixth')}}/>
            <span>
                <section>
                    <h3 style={{color:isFilled('seventh')}}>How many blog posts have you written?</h3>
                    <textarea rows="3" placeholder='How many?' onChange={(e)=>{setNew(e,'seventh')}}/>
                </section>
                <section>
                    <h3 style={{color:isFilled('eighth')}}>Where will you be publishing?</h3>
                    <textarea rows="3" placeholder={`What's your prefered platform?`} onChange={(e)=>{setNew(e,'eighth')}}/>
                </section>
            </span>
            <h3 style={{color:isFilled('nineth')}}>How can the group help you?<span>*</span></h3>
            <textarea rows="3" placeholder='We all want to improve!' onChange={(e)=>{setNew(e,'nineth')}}/>
            <h3 style={{color:isFilled('tenth')}}>Who are your favorite writers?</h3>
            <textarea rows="3" placeholder='Favorite authors?' onChange={(e)=>{setNew(e,'tenth')}}/>

            <button className={styles.largeButton} style={{margin:'50px 0px 100px 0px'}} disabled={isDisabled} onClick={()=>{updateForm(user, formData)}}> Submit!</button>
        </>
    )
}

export default Form