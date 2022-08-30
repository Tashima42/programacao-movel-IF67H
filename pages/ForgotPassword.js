import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { user } from "../firebase.js"
import iconVaccine from "../assets/icon-vaccine.png"
import Input from "../components/Input.js"

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState(null)
  function handleUsernameChange(event) { setEmail(event.target.value) }
  async function forgotPassword() {
    await user.resetPassword(email)
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <View className="title" style={styles.title}>
        <Image src={iconVaccine}></Image>
        <Text style={styles.title.text}>My Health</Text>
        <Input label="E-mail" type="email" placeholder="email@example.com" onChange={handleUsernameChange} />
        <Button title="Recuperar senha" color="green" onPress={forgotPassword}/>
      </View>
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
