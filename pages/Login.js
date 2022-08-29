import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import iconVaccine from "../assets/icon-vaccine.png"
import background from "../assets/background-initial.png"
import Button from "../components/Button.js"
import Input from "../components/Input.js"

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image} resizeMode="cover">
        <div className="title" style={styles.title}>
          <img src={iconVaccine}></img>
          <Text style={styles.title.text}>My Health</Text>
        </div>
        <Text style={styles.centerText}>Controle as suas vacinas e fique seguro</Text>
        <div className="form-inputs">
          <Input label="E-mail" type="email" placeholder="email@example.com" />
          <Input label="Senha" type="password" placeholder="**************" />
          <Text style={styles.warning}>E-mail e/ou senha inválidos.</Text>
        </div>
        <div className="form-buttons">
          <Button text="Entrar" color="green" size="m" />
          <Button text="Criar minha conta" color="lightBlue" size="m" />
          <Button text="Esqueci minha senha" color="lightGrey" size="m" />
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
