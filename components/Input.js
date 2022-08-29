import { StyleSheet, Text, View } from 'react-native';

export default function Input(props) {
  const { label, type = "text", placeholder, textColor = "white", onChange } = props
  const styles = createStyle(textColor)
  return (
    <View style={styles.form}>
      <Text style={styles.label}>{label}</Text>
      <input type={type} placeholder={placeholder} onChange={(e) => onChange(e)}></input>
    </View>
  );
}

function createStyle(textColor) {
  return StyleSheet.create({
    form: {
    },
    label: {
      color: textColor,
      alignSelf: "center"
    }
  });
}
