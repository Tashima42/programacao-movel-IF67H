import { StyleSheet, View, Button as Btn } from 'react-native';

export default function Button(props) {
  const { title, color, onPress } = props
  const styles = createStyle(color)
  return (
    <View style={styles.container}>
      <Btn title={title} color="white" onPress={onPress}></Btn>
    </View>
  );
}

function createStyle(color) {
  if (color == "green") color = "#37BD6D"
  if (color == "blue") color = "#419ED7"
  if (color == "grey") color = "#B0CCDE"
  return StyleSheet.create({
    container: {
      backgroundColor: color,
      alignSelf: "center"
    }
  });
}
