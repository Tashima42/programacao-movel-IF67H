import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import iconVaccine from "../assets/icon-vaccine.png"
import Input from "../components/Input.js"

export default function CreateAccount() {
  return (
    <View style={styles.container}>
        <div className="title" style={styles.title}>
          <img src={iconVaccine}></img>
          <Text style={styles.title.text}>My Health</Text>
        </div>
        <div className="form-inputs">
          {/* TODO: Add radio button component */}
          <Input label="Sexo" type="radio" placeholder="" textColor="black" />
          <Input label="Nome completo" type="text" placeholder="Jurandir Pereira" textColor="black" />
          <Input label="Data de nascimento" type="date" placeholder="29/08/2000" textColor="black" />
          <Input label="E-mail" type="email" placeholder="email@example.com" textColor="black" />
          <Input label="Senha" type="password" placeholder="**************" textColor="black" />
          <Input label="Repetir senha" type="password" placeholder="**************" textColor="black" />
          <Text style={styles.warning}>E-mail e/ou senha inválidos.</Text>
        </div>
        <div className="form-buttons">
          <Button title="Cadastrar" color="green"/>
        </div>
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
