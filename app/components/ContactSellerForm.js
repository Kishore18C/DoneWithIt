import React from 'react';
import { View, Alert, Keyboard } from 'react-native';
import * as Notifications from 'expo-notifications'

import {
    Form,
    FormField,
    SubmitButton,
} from "../components/forms"

function ContactSellerForm({ listing }) {
    const handleSubmit = async ({ resetForm }) => {
        Keyboard.dismiss()
        resetForm()
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

export default ContactSellerForm;