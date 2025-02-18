import axios, { AxiosError } from 'axios'

export interface LoginData {
    name: string
    phone: string
}

export const APIRequest = async (arg: LoginData) => {
    try {
        const response = await axios.post('https://order.drcash.sh/v1/order',
            {
                "stream_code": "vv4uf",
                "client": {
                    "phone": arg.name,
                    "name": arg.phone
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer RLPUUOQAMIKSAB2PSGUECA'
                }
            })
        return response.data
    } catch (e) {
        const error = e as AxiosError
        if (error.response?.data) {
            return error.response.data
        } else {
            return error.response?.statusText
        }
    }
}