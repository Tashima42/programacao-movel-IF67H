import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { user } from "../firebase.js"
import iconVaccine from "../assets/icon-vaccine.png"
import background from "../assets/background-initial.png"
import Input from "../components/Input.js"

export default function Login() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  function handleUsernameChange(event) { setEmail(event.target.value) }
  function handlePasswordChange(event) { setPassword(event.target.value) }
  async function login() {
    const userInformation = await user.signIn(email, password)
    console.log(userInformation)
    //TODO: add change user screen
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image} resizeMode="cover">
        <div className="title" style={styles.title}>
          <img src={iconVaccine}></img>
          <Text style={styles.title.text}>My Health</Text>
        </div>
        <Text style={styles.centerText}>Controle as suas vacinas e fique seguro</Text>
        <div className="form-inputs">
          <Input label="E-mail" type="email" placeholder="email@example.com" onChange={handleUsernameChange} />
          <Input label="Senha" type="password" placeholder="**************" onChange={handlePasswordChange} />
          <Text style={styles.warning}>E-mail e/ou senha inválidos.</Text>
        </div>
        <div className="form-buttons">
          <Button title="Entrar" color="green"  onPress={login}/>
          <Button title="Criar minha conta" color="blue" />
          <Button title="Esqueci minha senha" color="grey" />
        </div>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItens: "center",
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    flexDirection: "row",
    text: {
      fontSize: "30px",
      textDecorationLine: 'underline'
    },
    height: "30px"
  },
  centerText: {
    fontSize: "30px"
  }
});
