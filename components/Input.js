import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function InputComponent(props) {
  const { label, type = "text", placeholder, textColor = "white", onChangeText } = props
  const styles = createStyle(textColor)
  return (
    <View style={styles.form}>
      <Text style={styles.label}>{label}</Text>
      <TextInput type={type} placeholder={placeholder} onChangeText={onChangeText}></TextInput>
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
