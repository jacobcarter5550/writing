import axios from 'axios'


export const testSupa = async () => {
    const endp = '/api/supabase/test'
    const res = await axios.get(endp)

    console.log(res.data)
    return res
}