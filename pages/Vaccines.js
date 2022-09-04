import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React, { useState } from 'react';
import iconVaccine from "../assets/icon-vaccine.png"
import Vaccine from '../components/Vaccine';
import Header from "../components/Header"

export default function Vaccines({ navigation }) {
  const [vaccines, setVaccines] = useState([
    {
      id: 1,
      title: "BCG",
      dose: "Dose Unica",
      date: "11/06/2022",
      img: "https://firebasestorage.googleapis.com/v0/b/projeto-mobile-7af32.appspot.com/o/public%2Fface2.png?alt=media"
    },
    {
      id: 2,
      title: "Febre Amarela",
      dose: "1a. dose",
      date: "11/06/2022",
      img: "https://firebasestorage.googleapis.com/v0/b/projeto-mobile-7af32.appspot.com/o/public%2Fface2.png?alt=media",
      nextDose: "Próxima dose em 11/10/2022"
    },
    {
      id: 3,
      title: "Hepatite B",
      dose: "1a. dose",
      date: "11/06/2022",
      img: "https://firebasestorage.googleapis.com/v0/b/projeto-mobile-7af32.appspot.com/o/public%2Fface2.png?alt=media",
      nextDose: "Próxima dose em 11/10/2022"
    },
    {
      id: 4,
      title: "Poliomelite",
      dose: "1a. dose",
      date: "11/06/2022",
      img: "https://firebasestorage.googleapis.com/v0/b/projeto-mobile-7af32.appspot.com/o/public%2Fface2.png?alt=media",
      nextDose: "Próxima dose em 11/10/2022"
    },
    {
      id: 5,
      title: "Poliomelite",
      dose: "1a. dose",
      date: "11/06/2022",
      img: "https://firebasestorage.googleapis.com/v0/b/projeto-mobile-7af32.appspot.com/o/public%2Fface2.png?alt=media",
      nextDose: "Próxima dose em 11/10/2022"
    },
  ])
  function createVaccines(vaccines) {
    const r = Math.floor(vaccines.length / 2)
    let lastElm = vaccines.length - r * 2;
    while (lastElm !== 2) {
      vaccines.push({
        id: `empty-${lastElm}`,
        title: `empty-${lastElm}`,
        dose: `empty-${lastElm}`,
        date: `empty-${lastElm}`,
        img: `empty-${lastElm}`,
        nextDose: `empty-${lastElm}`,
        empty: true
      });
      lastElm += 1;
    }
    return vaccines;
  }

  function renderVaccine({ item }) {
    const { title, dose, date, img, nextDose, empty } = item
    return <Vaccine title={title} dose={dose} date={date} img={img} nextDose={nextDose} empty={empty} />
  }
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <View className="vaccines">
        <FlatList
          data={createVaccines(vaccines)}
          renderItem={renderVaccine}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
      <View className="form-buttons">
        <Button title="Nova vacina" color="green" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItens: "center",
    backgroundColor: "#ADD4D0",
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    flexDirection: "row",
    text: {
      fontSize: "30px",
      textDecorationLine: 'underline'
    },
    height: "30px"
  },
  centerText: {
    fontSize: "30px"
  }
});
