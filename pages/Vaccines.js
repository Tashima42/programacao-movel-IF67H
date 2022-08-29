import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import iconVaccine from "../assets/icon-vaccine.png"
import Vaccine from '../components/Vaccine';

export default function Vaccines() {
  return (
    <View style={styles.container}>
      <div className="title" style={styles.title}>
        <img src={iconVaccine}></img>
        <Text style={styles.title.text}>My Health</Text>
      </div>
      <div className="vaccines">
        <Vaccine title="BCG" dose="Dose Unica" date="11/06/2022" img="https://firebasestorage.googleapis.com/v0/b/projeto-mobile-7af32.appspot.com/o/public%2Fface2.png?alt=media&token=4f64ea58-b311-442a-b342-eb07fc2ad64c" />
        <Vaccine title="BCG" dose="Dose Unica" date="11/06/2022" img="https://firebasestorage.googleapis.com/v0/b/projeto-mobile-7af32.appspot.com/o/public%2Fface2.png?alt=media&token=4f64ea58-b311-442a-b342-eb07fc2ad64c" />
      </div>
      <div className="form-buttons">
        <Button title="Cadastrar" color="green" />
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
