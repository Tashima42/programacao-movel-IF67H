import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function InputComponent(props) {
  const { label, type = "text", placeholder, textColor = "white", onChangeText } = props
  const styles = createStyle(textColor)
  const [chosenDate, setChosenDate] = useState(new Date())
  return (
    <View style={styles.form}>
      { inputType(type) }
    </View>
  );
  function inputType(type) {
    if (type === "text") return (
      <TextInput
        style={styles.textInput}
        type={type}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#3F92C5"
      >
      </TextInput>
    )
    else if (type === "date") return (
      <View>
        <TextInput
          style={styles.textInput}
          type={type}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="#3F92C5"
        >
        </TextInput>
      </View>
    )
  }
}

function createStyle(textColor) {
  return StyleSheet.create({
    form: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
    },
    label: {
      color: textColor,
      alignSelf: "center",
      fontSize: 20,
      color: 'white',
    },
    textInput: {
      marginLeft: 10,
      width: 160,
      height: 25,
      fontSize: 20,
      backgroundColor: "white",
      marginBottom: 10,
    },
    dateInput: {
      width: 100,
      backgroundColor: 'red',
    }
  });
}
