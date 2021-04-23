import axios from 'axios'
import { MOCK_ENABLED, MOCK_URL, API_URL } from '../app.constants'

const client = axios.create({baseURL: API_URL})

client.interceptors.request.use((config) => {
    if(MOCK_ENABLED){
        for(const [key, value] of MOCK_URL){
            const re = RegExp(key)
            if(config.url.match(re)){
                config.baseURL = "http://localhost:3000/"
                config.url = value
                config.method = "get"
            }
        }
    }
    return config
})

export default client