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

export const setFBUser = async (data) => {
    const endp = '/api/supabase/getFBUser',
        res = await axios.patch(endp, data)
    return res.data
}


export const notionCreate = async (data) => {
    const endp = '/api/notion/notionDBCreate',
        res = await axios.post(endp, data)
    return res.data
}

export const pageCreate = async (data) => {
    const endp = '/api/notion/createPage',
        res = await axios.post(endp, data)
    return res.data
}

export const dbQuery = async (data) => {
    const endp = '/api/notion/queryDB',
        res = await axios.post(endp, data)
    return res.data
}

export const getPals = async (data)  =>{
    const endp ='/api/supabase/getPals',
        res = await axios.post(endp, data)
    return res.data.data
}