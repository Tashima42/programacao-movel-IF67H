import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Header from "../components/Header"
import Button from "../components/Button"
import Radio from "../components/Radio"
import { connect } from 'react-redux';
import { addVaccine } from '../redux/actions';

function CreateVaccine(props) {
  const { navigation } = props

  const [image, setImage] = useState(null);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState(null);
  const [dose, setDose] = useState(null);
  const [nextDose, setNextDose] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  function setSelectedRadio(options) {
    const selected = options.findIndex(option => option.selected === true)
    setDose(options[selected].value)
  }
  function save() {
    props.addVaccine({ image, date, title, dose, nextDose })
    navigation.navigate("Vaccines")
  }
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <View style={styles.inputs}>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Data de vacinação</Text>
            <TextInput style={styles.textInput} placeholder="29/08/2000" placeholderTextColor="#3F92C5" onChangeText={setDate} > </TextInput>
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Vacina</Text>
            <TextInput style={styles.textInput} placeholder="Hepatite B" placeholderTextColor="#3F92C5" onChangeText={setTitle} > </TextInput>
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Dose</Text>
            <Radio options={["1.a dose", "2.a dose", "3.a dose", "Dose única"]} onPress={setSelectedRadio}></Radio>
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.labelComprovante}>Comprovante</Text>
            <Pressable onPress={pickImage}>
              <View style={styles.imagePicker}>
                <Text style={styles.label}>Selecionar Imagem</Text>
              </View>
            </Pressable>
            {image && <Image source={{ uri: image }} style={styles.image} />}
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Próxima vacinação</Text>
            <TextInput style={styles.textInput} placeholder="29/08/2000" placeholderTextColor="#3F92C5" onChangeText={setNextDose} > </TextInput>
          </View>
        </View>
        <View className="form-buttons" style={styles.buttonContainer}>
          <View style={styles.saveButton}>
            <Button title="Cadastrar" color="green" onPress={save} />
          </View>
        </View>
      </View><StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItens: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "#ADD4D0",
    padding: 20,
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginBottom: 40,
  },
  inputs: {
    alignItens: "center",
    justifyContent: "center",
    outer: {
      alignSelf: "center",
    }
  },
  label: {
    color: 'white',
    alignSelf: "flex-start",
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
  },
  textInput: {
    marginLeft: 10,
    width: 160,
    height: 25,
    fontSize: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  saveButton: {
    marginBottom: 100,
  },
  imagePicker: {
    backgroundColor: "#419ED7",
    width: 160,
    height: 25,
    alignSelf: "center",
    marginLeft: 10,
  },
  image: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 50,
  },
  labelComprovante: {
    color: 'white',
    alignSelf: "flex-start",
    fontSize: 15,
    color: 'white',
    marginLeft: 50,
    marginTop: 10,
    marginBottom: 5,
  },
});


export default connect(
  null,
  { addVaccine }
)(CreateVaccine)