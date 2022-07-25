import axios from 'axios'


export const getUser = async (data) => {
    const endp = '/api/supabase/getUser',
        res = await axios.post(endp, data)
    return res
}

export const updateUserForm = async (data) => {
    const endp = '/api/supabase/updateForm',
        res = await axios.post(endp, data)
    return res
}