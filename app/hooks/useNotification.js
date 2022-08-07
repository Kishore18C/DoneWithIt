import { useEffect } from 'react';
import * as Notifications from 'expo-notifications'

import expoPushTokensApi from "../api/expoPushTokens";

const useNotification = notificationReceived => {

    useEffect(() => {
        registerForPushNotification()

        if (notificationReceived) Notifications.addNotificationReceivedListener(notificationReceived)
    }, [])

    const registerForPushNotification = async () => {
        try {
            const permission = await Notifications.getPermissionsAsync()

            if (!permission.granted) return

            const token = await Notifications.getExpoPushTokenAsync()
            expoPushTokensApi.register(token)
        } catch (error) {
            console.log(error)
        }
    }
}

export default useNotification