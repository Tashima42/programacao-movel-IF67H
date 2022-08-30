import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { user } from "../firebase.js"
import iconVaccine from "../assets/icon-vaccine.png"
import Input from "../components/Input.js"

export default function CreateAccount({ navigation }) {
  const [sex, setSex] = useState(null)
  const [name, setName] = useState(null)
  const [birthDate, setBirthDate] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [repeatPassword, setRepeatPassword] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  function handleSexChange(event) { setSex(event.target.value) }
  function handleNameChange(event) { setName(event.target.value) }
  function handleBirthDateChange(event) { setBirthDate(event.target.value) }
  function handleEmailChange(event) { setEmail(event.target.value) }
  function handlePasswordChange(event) { setPassword(event.target.value) }
  function handleRepeatPasswordChange(event) { setRepeatPassword(event.target.value) }
  async function createUser() {
    if (!sex) { setErrorMessage("Falta o sexo"); return }
    if (!name) { setErrorMessage("Falta o nome"); return }
    if (!birthDate) { setErrorMessage("Falta a data de nascimento"); return }
    if (!email) { setErrorMessage("Falta o email"); return }
    if (!password) { setErrorMessage("Falta preencher a senha"); return }
    if (!repeatPassword) { setErrorMessage("Falta preencher o repetir a senha"); return }
    if (!validatePassword()) { setErrorMessage("Senha não confere!"); return }

    const userInformation = await user.create(email, password, birthDate, name, sex)
    navigation.navigate("Vaccines")
  }
  function validatePassword() {
    if (password !== repeatPassword) {
      return false
    }
  }
  return (
    <View style={styles.container}>
      <View className="title" style={styles.title}>
        <Image source={iconVaccine}></Image>
        <Text style={styles.title.text}>My Health</Text>
      </View>
      <View className="form-inputs">
        {/* TODO: Add radio button component */}
        <Input label="Sexo" type="radio" placeholder="" textColor="black" onChange={handleSexChange} />
        <Input label="Nome completo" type="text" placeholder="Jurandir Pereira" textColor="black" onChange={handleNameChange} />
        <Input label="Data de nascimento" type="date" placeholder="29/08/2000" textColor="black" onChange={handleBirthDateChange} />
        <Input label="E-mail" type="email" placeholder="email@example.com" textColor="black" onChange={handleEmailChange} />
        <Input label="Senha" type="password" placeholder="**************" textColor="black" onChange={handlePasswordChange} />
        <Input label="Repetir senha" type="password" placeholder="**************" textColor="black" onChange={handleRepeatPasswordChange} />
        <Text style={styles.warning}>{errorMessage}</Text>
      </View>
      <View className="form-buttons">
        <Button title="Cadastrar" color="green" onPress={createUser} />
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
