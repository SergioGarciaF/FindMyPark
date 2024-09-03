import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

const getData = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}


export default {getData}
