import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Button, Image } from 'react-native';
import { user } from "../firebase.js"
import iconVaccine from "../assets/icon-vaccine.png"
import background from "../assets/background-initial.png"
import Input from "../components/Input.js"

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  function handleUsernameChange(event) { setEmail(event.target.value) }
  function handlePasswordChange(event) { setPassword(event.target.value) }
  async function login() {
    try {
      const userInformation = await user.signIn(email, password)
      console.log(userInformation)
      navigation.navigate('Vaccines')
    } catch (error) {
      console.error(error)
      setErrorMessage("E-mail e/ou senha inválidos.")
    }
  }
  function navigateToCreateAccount() { navigation.navigate('CreateAccount') }
  function navigateToForgotPassword() { navigation.navigate('ForgotPassword') }
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image} resizeMode="cover">
        <View style={styles.inner}>
          <View className="title" style={styles.title}>
            <Image source={iconVaccine}></Image>
            <Text style={styles.title.text}>My Health</Text>
          </View>
          <Text style={styles.centerText}>Controle as suas vacinas e fique seguro</Text>
          <View className="form-inputs" style={styles.formInputs}>
            <Input label="E-mail" type="email" placeholder="email@example.com" onChange={handleUsernameChange} />
            <Input label="Senha" type="password" placeholder="**************" onChange={handlePasswordChange} />
            <Text style={styles.warning}>{errorMessage}</Text>
          </View>
          <View className="form-buttons" style={styles.formButtons}>
            <Button style={styles.button} title="Entrar" color="green" onPress={login} />
            <Button style={styles.button} title="Criar minha conta" color="blue" onPress={navigateToCreateAccount} />
            <Button style={styles.button} title="Esqueci minha senha" color="grey" onPress={navigateToForgotPassword} />
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { flex: 1 },
  inner: { margin: 20 },
  title: {
    marginTop: 100,
    alignSelf: "center",
    flexDirection: "row",
    text: {
      color: "#419ED7",
      fontSize: 50,
      textDecorationLine: 'underline'
    },
  },
  centerText: {
    marginTop: 80,
    fontSize: 35,
    color: "#419ED7",
    textAlign: "center",
  },
  formInputs: {
    marginTop: 70,
  },
  formButtons: {
    flexDirection: "column",
    justifySelf: "flex-end",
  },
  button: {
    marginTop: 20,
  }
});
