import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { user } from "../firebase.js"
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Header from "../components/Header"
import Button from "../components/Button"
import Radio from "../components/Radio"

let UserContext

export default function CreateAccount({ navigation }) {
  const [sex, setSex] = useState("Masculino")
  const [name, setName] = useState(null)
  const [birthDate, setBirthDate] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [id, setId] = useState(null)

  UserContext = React.createContext({ id, email, setUser: (id, email) => { setId(id); setEmail(email); } })
  const { setUser } = useContext(UserContext)

  async function createUser() {
    if (!sex) { setErrorMessage("Falta o sexo"); return }
    if (!name) { setErrorMessage("Falta o nome"); return }
    if (!birthDate) { setErrorMessage("Falta a data de nascimento"); return }
    if (!email) { setErrorMessage("Falta o email"); return }
    if (!password) { setErrorMessage("Falta preencher a senha"); return }
    if (!repeatPassword) { setErrorMessage("Falta preencher o repetir a senha"); return }
    if (!validatePassword()) { setErrorMessage("Senha não confere!"); return }

    try {
      const userId = await user.create(email, password, new Date(birthDate), name, sex)
      setUser(userId, email)
      navigation.navigate("Vaccines")
    } catch (error) {
      console.error("error: ", error)
    }
  }
  function validatePassword() {
    if (password !== repeatPassword) {
      return false
    }
    return true
  }
  function setSelectedRadio(options) {
    const selected = options.findIndex(option => option.selected === true)
    setSex(options[selected].value)
  }
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <View style={styles.inputs}>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput style={styles.textInput} placeholder="Jurandir Pereira" placeholderTextColor="#3F92C5" onChangeText={setName} > </TextInput>
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Sexo</Text>
            <Radio options={["Masculino", "Feminino"]} onPress={setSelectedRadio}></Radio>
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Data de nascimento</Text>
            <TextInput style={styles.textInput} placeholder="29/08/2000" placeholderTextColor="#3F92C5" onChangeText={setBirthDate}> </TextInput>
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.textInput} placeholder="email@example.com" placeholderTextColor="#3F92C5" onChangeText={setEmail} autoCapitalize='none'> </TextInput>
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.textInput} placeholder="**************" placeholderTextColor="#3F92C5" onChangeText={setPassword} autoCapitalize='none' secureTextEntry={true} > </TextInput>
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Repetir senha</Text>
            <TextInput style={styles.textInput} placeholder="**************" placeholderTextColor="#3F92C5" onChangeText={setRepeatPassword} autoCapitalize='none' secureTextEntry={true}> </TextInput>
          </View>
          <Text style={styles.warning}>{errorMessage}</Text>
        </View>
        <View className="form-buttons" style={styles.buttonContainer}>
          <View style={styles.saveButton}>
            <Button title="Cadastrar" color="green" onPress={createUser} />
          </View>
        </View>
      </View><StatusBar style="auto" />
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
  body: {
    flex: 1,
    backgroundColor: "#ADD4D0",
    padding: 20,
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginBottom: 40,
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
    width: 200,
    height: 25,
    fontSize: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  saveButton: {
    marginBottom: 100,
  },
  imagePicker: {
    backgroundColor: "#419ED7",
    width: 160,
    height: 25,
    alignSelf: "center",
    marginLeft: 10,
  },
  image: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 50,
  },
  labelComprovante: {
    color: 'white',
    alignSelf: "flex-start",
    fontSize: 15,
    color: 'white',
    marginLeft: 50,
    marginTop: 10,
    marginBottom: 5,
  },
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
      fontSize: 30,
      textDecorationLine: 'underline'
    },
    height: "30px"
  },
  centerText: {
    fontSize: "30px"
  },
  warning: {
    color: "red",
    marginLeft: 120,
  }
});

export { UserContext }