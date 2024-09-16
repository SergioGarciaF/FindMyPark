import axios from 'axios'

const baseUrl = 'http://localhost:3002/parkings'

const getData = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}


export default {getData}
