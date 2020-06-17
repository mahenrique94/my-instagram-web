import { AxiosError } from 'axios'

const handleError = (error: AxiosError) => console.error(error.response?.data)

export { handleError }
