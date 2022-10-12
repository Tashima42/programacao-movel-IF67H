import React, { useState } from 'react';
import { StyleSheet, View } from "react-native"
import RadioGroup from 'react-native-radio-buttons-group';

export default function Radio(props) {
  const [options, setOptions] = useState(getRadioButtons(props.options))

  const { onPress } = props

  function press(options) {
    setOptions(options)
    onPress(options)
  }

  return (
    <View style={styles.container}>
      <RadioGroup
        radioButtons={options}
        onPress={press}
        layout="row"
        containerStyle={{
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

function getRadioButtons(options) {
  const defaultOptions = {
    color: "white",
    borderColor: "white",
    size: 12,
    labelStyle: {
      color: "white",
    }
  }

  return options.map((option, index) => {
    return {
      ...defaultOptions,
      id: index.toString(),
      label: option,
      value: option,
      selected: index === 0 ? true : false
    }
  })
}