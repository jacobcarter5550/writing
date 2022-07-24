import magic from '../lib/magic'


function dash({router,logOut}) {


    return (
        <div>
            <h1>Dash</h1>
            <button onClick={()=>{logOut()}}>Log TF OUT</button>
        </div>
  )
}

export default dash