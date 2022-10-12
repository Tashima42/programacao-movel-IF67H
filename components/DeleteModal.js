import { StyleSheet, View, Text } from 'react-native';
import Button from "./Button"

export default function DeleteModal(props) {
  const { onPress, setVisible } = props
  return (
    <View style={styles.container}>
      <Text style={styles.modalText}>Tem certeza que deseja remover essa vacina?</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="SIM" color="salmon" onPress={onPress} />
        </View>
        <Button title="CANCELAR" color="blue" onPress={() => setVisible(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignSelf: "center",
    justifySelf: "center",
    marginTop: 330,
    width: 300,
    height: 150,
  },
  modalText: {
    fontSize: 19,
    textAlign: "center",
    color: "#FD7979",
    marginTop: 30,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  button: {
    marginRight: 50,
  }
});