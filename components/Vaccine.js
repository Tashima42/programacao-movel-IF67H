import { StyleSheet, Text, View, Image } from 'react-native';

export default function Vaccine(props) {
  const { title, dose, date, img, nextDose = "Não há próxima dose" } = props
  const styles = createStyle()
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
    text: {
      color: "white",
      alignSelf: "center"
    }
  });
}
