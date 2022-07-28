

export default async function outUser (magic, r, cookie) {
    cookie('user')
    await magic.user.logout().then(()=>{
        r.push('/')
    })
    return
}