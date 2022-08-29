import { StyleSheet, Text, View } from 'react-native';

export default function Input(props) {
  const { label, type = "text", placeholder } = props
  const styles = createStyle()
  return (
    <View style={styles.form}>
      <Text style={styles.label}>{label}</Text>
      <input type={type} placeholder={placeholder}></input>
    </View>
  );
}

function createStyle(size, color) {
  return StyleSheet.create({
    form: {
    },
    label: {
      color: "white",
      alignSelf: "center"
    }
  });
}
