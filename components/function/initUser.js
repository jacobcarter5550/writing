

export default async function initUser( set, cookie, magic, r, setCookie, getUser) {
    function addMonths(date, months) {
        date.setMonth(date.getMonth() + months);
        return date.toUTCString();
    }
    if(Object.keys(cookie).length !== 0 ) {
        function tryDecode () {
            try {return JSON.parse(atob(cookie.user))} catch (error) {console.log(error)}
        }
        const decCookie = tryDecode()
        const res = await getUser({userData: decCookie}),
            userSynth = {
                ...decCookie,
                ...res.data
            }
        set(userSynth)
        if(userSynth.questionID.submitted == false){
            r.push('/onboarding')
        } else if(r.asPath == '/') {
            r.push('/dash')
        }
    } else {
        const isLoggedIn = await magic.user.isLoggedIn()
        if (isLoggedIn && !r.asPath.includes('/redirect')) {
            const userData = await magic.user.getMetadata()
            const res = await getUser({userData: await userData}),
            userSynth = {
                ...userData,
                ...res.data
            }
            set(userSynth)
            setCookie('user', btoa(JSON.stringify(userData), {expires : addMonths(new Date(), + 6)}))
            if(userSynth.questionID.submitted == false){
                r.push('/onboarding')
            } else if(r.asPath == '/') {
                r.push('/dash')
            }
        } else {
            if(r.asPath !== '/redirect') {
                if(r.asPath !== '/' ){
                r.push('/'), set( null )
                } else {}
            } else {
                set( null )
            }
        }
    }
}