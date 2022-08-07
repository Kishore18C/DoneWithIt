import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

const key = 'authToken'

const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log("Error in storing token", error)
    }
}

const getToken = async () => {
    try {
        await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log("Error in getting token", error)
    }
}

const getUser = async () => {
    const token = await getToken()
    return token ? jwtDecode(token) : null
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("Error in deleting token", error)
    }
}

export default {
    storeToken,
    getUser,
    removeToken
}