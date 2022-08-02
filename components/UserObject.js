import styles from '../styles/Master.module.scss'

function UserObject({data, r, user}) {

    const userInterests = data.questionID.interest_tags,
        pic = data.fbData?.pictureURL

    function goToPal (ud) {
        if(user.id == ud.id)  {
            r.push('/dash')
        } else {
            r.push({
                pathname: `/pals/${ud.id}`,
                query: { user: data.name },
            })
        }
    }

    return (
        <div onClick={()=>{goToPal(data)}} className={styles.object}>
            <span style={{display:'flex'}}>
                <img src={pic} alt="" />
                <h2>{data.name}</h2>
            </span>
            <h3>Interests</h3>
            <article>
                {userInterests?.map((item, ind)=>{
                    return <ul key={ind}>{item}</ul>
                })}
            </article>
        </div>
    )
}

export default UserObject