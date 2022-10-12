import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';
import { user } from "../firebase.js"
import iconVaccine from "../assets/icon-vaccine.png"
import background from "../assets/background-initial.png"
import Button from '../components/Button.js';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions.js';

function Login(props) {
  const { navigation } = props
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  async function login() {
    try {
      const userInformation = await user.signIn(email, password)
      console.log(userInformation)
      props.setUser(userInformation)
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
            <View style={styles.inputs.outer}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput style={styles.textInput} placeholder="email@example.com" placeholderTextColor="#3F92C5" onChangeText={setEmail} autoCapitalize='none' > </TextInput>
            </View>
            <View style={styles.inputs.outer}>
              <Text style={styles.label}>Senha</Text>
              <TextInput style={styles.textInput} placeholder="**************" placeholderTextColor="#3F92C5" onChangeText={setPassword} secureTextEntry={true} > </TextInput>
            </View>
            <Text style={styles.warning}>{errorMessage}</Text>
          </View>
          <View style={styles.formButtons}>
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
    display: "flex",
    height: 200,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    alignSelf: "flex-end",
  },
  inputs: {
    alignItens: "center",
    justifyContent: "center",
    outer: {
      alignSelf: "center",
    }
  },
  label: {
    color: 'white',
    alignSelf: "flex-start",
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
  },
  textInput: {
    marginLeft: 10,
    width: 280,
    height: 25,
    fontSize: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  warning: {
    color: "red",
    marginLeft: 58,
    marginBottom: 80,
  },
});

export default connect(
  null,
  { setUser }
)(Login)
