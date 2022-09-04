import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Header({ navigation }) {
  const styles = createStyle()

  return (
    <View style={styles.view}>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={styles.pressable}
      >
        <View style={styles.hb.container}>
          <View style={styles.hb.block}></View>
          <View style={styles.hb.block}></View>
          <View style={styles.hb.block}></View>
        </View>
      </Pressable>
      <Text style={styles.title}>Minhas vacinas</Text>
    </View>
  );
}

function createStyle() {
  return StyleSheet.create({
    view: {
      backgroundColor: "#C1E7E3",
      flexDirection: "row",
      alignItems: "center",
      height: 100,
    },
    pressable: {
      fontSize: 50,
      padding: 10,
      marginBottom: 5,
      marginTop: 5,
    },
    title: {
      marginTop: 15,
      marginLeft: 20,
      fontSize: 50,
      color: "#419ED7",
      fontFamily: "AveriaLibre",
    },
    hb: {
      container: {
        marginTop: 10,
      },
      block: {
        display: "block",
        backgroundColor: "#DDDDDD",
        height: 8,
        width: 50,
        marginTop: 5,
      },
    }
  });
}
