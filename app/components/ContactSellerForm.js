import React from 'react';
import { View, Alert, Keyboard } from 'react-native';
import * as Notifications from 'expo-notifications'

import {
    Form,
    FormField,
    SubmitButton,
} from "../components/forms"
import messageApi from '../api/messages'

function ContactSellerForm({ listing }) {
    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss()

        const result = await messageApi.send(message, listing.id)

        if (!result.ok) {
            console.log('Unexpected error', result)
            return Alert.alert('Error', "Could not find the error")
        }

        resetForm()

        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Awesome',
                body: 'Your message was sent'
            },
            trigger: {
                seconds: 0.1
            }
        })
    }

    return (
        <View >
            <Form initialValues={{ message: "" }}
                onSubmit={handleSubmit}
            >
                <FormField
                    maxLength={255}
                    name="message"
                    placeholder="Message..."
                />
                <SubmitButton title="Contact Seller" />
            </Form>
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {}
// });
// }

export default ContactSellerForm;