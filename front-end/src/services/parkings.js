import axios from 'axios'

const baseUrl = '/api/parkings/'

const getData = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}


export default {getData}
