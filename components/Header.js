import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Header({ navigation }) {
  const styles = createStyle()
  return (
    <View style={styles.vaccine}>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 5, marginTop: 5 }}
      >
        <Text>&#9776;</Text>
      </Pressable>
      <Text style={styles.title}>Minhas Vacinas</Text>
    </View>
  );
}

function createStyle() {
  return StyleSheet.create({
    bar: {
      width: 50,
      heith: 10,
      backgroundColor: "red",
      style: "block",
    },
    text: {
      color: "white",
      alignSelf: "center"
    },
    itemEmpty: {
      backgroundColor: "transparent"
    }
  });
}
