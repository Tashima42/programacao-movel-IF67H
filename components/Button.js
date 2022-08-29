import { StyleSheet, Text, View } from 'react-native';

export default function Button(props) {
  const { text, color = "green", size = "s" } = props
  const styles = createStyle(size, color)
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

function createStyle(size, color) {
  const button = {
    sizes: {
      "l": { heigth: 15 },
      "m": { heigth: 10 },
      "s": { heigth: 5 },
    },
    colors: {
      "green": { backgroundColor: "green" },
      "lightBlue": { backgroundColor: "blue" },
      "lightGrey": { backgroundColor: "grey" },
    }
  }
  return StyleSheet.create({
    button: {
      ...button.sizes[size],
      ...button.colors[color],
    },
    text: {
      color: "white",
      alignSelf: "center"
    }
  });
}
