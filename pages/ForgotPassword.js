import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { user } from "../firebase.js"
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Header from "../components/Header"
import Button from "../components/Button"
export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState(null)
  async function forgotPassword() {
    const userInformation = await user.resetPassword(email)
    console.log(userInformation)
    navigation.navigate("Login")
  }
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <View style={styles.inputs}>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.textInput} placeholder="email@example.com" placeholderTextColor="#3F92C5" onChangeText={setEmail} autoCapitalize='none'> </TextInput>
          </View>
        </View>
        <View className="form-buttons" style={styles.buttonContainer}>
          <View style={styles.saveButton}>
            <Button title="Recuperar senha" color="green" onPress={forgotPassword} />
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
    justifyContent: "center",
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
    width: 300,
    height: 25,
    fontSize: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  saveButton: {
    marginTop: 200,
  },
});
