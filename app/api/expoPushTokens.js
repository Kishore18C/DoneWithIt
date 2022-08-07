import client from './client'

const register = () => client.post('/expoPushTokens', { tokens: pushTokens })

export default {
    register
}