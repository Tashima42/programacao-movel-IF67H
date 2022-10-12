import { StyleSheet, Text, View, Image } from 'react-native';

export default function Vaccine(props) {
  const { empty, title, dose, date, nextDose = "Não há próxima dose" } = props
  let img = require("../assets/vaccine.png")
  const styles = createStyle()
  if (empty) {
    return <View style={[styles.vaccine, styles.itemEmpty]} />;
  }
  return (
    <View style={styles.vaccine}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.dose}>{dose}</Text>
      <Text style={styles.date}>{date}</Text>
      <Image
        sytle={styles.img}
        width={150}
        height={90}
        source={img}
      />
      <Text style={styles.nextDose}>{nextDose}</Text>
    </View>
  );
}

function createStyle() {
  return StyleSheet.create({
    vaccine: {
      borderRadius: 5,
      backgroundColor: "white",
      margin: 5,
      alignItems: "center",
      flexGrow: 1,
      padding: 20,
      flexBasis: 0,
      marginBottom: 0,
      padding: 2,
    },
    title: {
      color: "#3F92C5",
      alignSelf: "center",
      fontFamily: "AveriaLibre",
      fontSize: 20,
    },
    itemEmpty: {
      backgroundColor: "transparent"
    },
    dose: {
      backgroundColor: "#3F92C5",
      color: "white",
      fontFamily: "AveriaLibre",
      padding: 3,
      paddingHorizontal: 15,
    },
    date: {
      color: "#8B8B8B",
      margin: 5,
    },
    img: {
    },
    nextDose: {
      color: 'red',
      alignSelf: 'flex-end',
      fontSize: 14,
      marginBottom: 0,
    }
  });
}
