import { StyleSheet, Text, View, Image } from 'react-native';

export default function Vaccine(props) {
  const { empty, title, dose, date, img, nextDose = "Não há próxima dose" } = props
  const styles = createStyle()
  if (empty) {
    return <View style={[styles.vaccine, styles.itemEmpty]} />;
  }
  return (
    <View style={styles.vaccine}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.dose}>{dose}</Text>
      <Text style={styles.date}>{date}</Text>
      <Image source={{ uri: img }} />
      <Text style={styles.nextDose}>{nextDose}</Text>
    </View>
  );
}

function createStyle() {
  return StyleSheet.create({
    vaccine: {
      borderRadius: 5,
      backgroundColor: "red",
      margin: 5,
      alignItems: "center",
      flexGrow: 1,
      padding: 20,
      flexBasis: 0,
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
