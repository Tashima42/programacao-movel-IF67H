import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, Pressable, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Header from "../components/Header"
import Button from "../components/Button"
import DeleteModal from '../components/DeleteModal';
import Radio from "../components/Radio"
import { connect } from "react-redux"
import { getSelectedVaccine, getVaccines } from '../redux/selectors';
import { editVaccine, removeVaccine } from '../redux/actions';

function EditVaccine(props) {
  const { navigation } = props
  const [modalVisible, setModalVisible] = useState(false)

  const [date, setDate] = useState(props.currentVaccine.date);
  const [title, setTitle] = useState(props.currentVaccine.title);
  const [dose, setDose] = useState(props.currentVaccine.dose);
  const [image, setImage] = useState(props.currentVaccine.image);
  const [nextDose, setNextDose] = useState(props.currentVaccine.nextDose);

  useEffect(() => {
    let loaded = false
    if (loaded != false) {
      console.log("load")
      setDate(props.currentVaccine.date)
      setTitle(props.currentVaccine.title);
      setDose(props.currentVaccine.dose);
      setImage(props.currentVaccine.image);
      setNextDose(props.currentVaccine.nextDose);
      loaded = true
    }
  }, [navigation, date, title, dose, image, nextDose])


  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) setImage(result.uri);
  };

  function setSelectedRadio(options) {
    const selected = options.findIndex(option => option.selected === true)
    setDose(options[selected].value)
  }

  function saveUpdates() {
    props.editVaccine(props.selectedVaccine, { date, title, dose, image, nextDose })
    navigation.navigate("Vaccines")
  }
  
  function removeItem() {
    props.removeVaccine(props.selectedVaccine)
    setModalVisible(false)
    navigation.navigate("Vaccines")
  }

  return (
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={styles.modal}
      >
        <DeleteModal onPress={removeItem} setVisible={setModalVisible} />
      </Modal>

      <Header navigation={navigation} />
      <View style={styles.body}>
        <View style={styles.inputs}>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Data de vacinação</Text>
            <TextInput style={styles.textInput} value={date} onChangeText={setDate} placeholder="29/08/2000" placeholderTextColor="#3F92C5" > </TextInput>
          </View>
          <View style={styles.inputs.outer}>
            <Text style={styles.label}>Vacina</Text>
            <TextInput style={styles.textInput} value={title} onChangeText={setTitle} placeholder="Hepatite B" placeholderTextColor="#3F92C5" > </TextInput>
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
            <TextInput style={styles.textInput} value={nextDose} onChangeText={setNextDose} placeholder="29/08/2000" placeholderTextColor="#3F92C5" > </TextInput>
          </View>
        </View>
        <View className="form-buttons" style={styles.buttonContainer}>
          <View style={styles.saveButton}>
            <Button title="Salvar alterações" color="green" onPress={saveUpdates} />
          </View>
          <Button title="Excluir" color="red" onPress={() => setModalVisible(true)} />
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
  modal: {
    alignSelf: "center",
    justifySelf: "center",
    marginTop: 500,
  }
});

const mapStateToProps = state => {
  const vaccines = getVaccines(state)
  const selectedVaccine = getSelectedVaccine(state)
  const currentVaccine = vaccines[selectedVaccine]
  return { vaccines, selectedVaccine, currentVaccine }
}

export default connect(mapStateToProps, { editVaccine, removeVaccine })(EditVaccine)
