import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import auth from '../auth/useAuth'
import authApi from '../api/login'
import AuthContext from "../auth/context";
import authStorage from '../auth/storage'
import colors from "../config/colors";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton, ErrorMessage } from "../components/forms";
import userApi from '../api/register'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [registerfailed, setRegisterFailed] = useState(false)
  const [error, setError] = useState()
  const authContext = useContext(AuthContext)

  const handleSubmit = async userInfo => {
    const result = await userApi.register(userInfo)


    if (!result.ok) {
      if (result.data) {
        console.log(result.problem)
        setError(result.data.error)
      }
      else {
        console.log(result.problem)
        setError("Unexpected error occured")
      }
      return setRegisterFailed(true)
    }

    setRegisterFailed(false)
    const { data: authToken } = authApi.login(userInfo.email, userInfo.password)
    const user = jwtDecode(authToken)
    authContext.setUser(user)
    authStorage.storeToken(authToken)
    auth.logIn(authToken)
  }

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white
  },
});

export default RegisterScreen;
