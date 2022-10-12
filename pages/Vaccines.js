import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import React from 'react';
import Vaccine from '../components/Vaccine';
import Header from "../components/Header"
import Button from "../components/Button"
import { connect } from "react-redux"
import { getVaccines } from "../redux/selectors"
import { selectVaccine } from "../redux/actions"

function Vaccines(props) {
  const { navigation } = props
  const [vaccines, setVaccines] = React.useState(props.vaccines)
  function navigateToCreateVaccine() {
    navigation.navigate("CreateVaccine")
  }

  React.useEffect(() => {
    console.log("load vaccines")
    setVaccines(props.vaccines)
  }, [navigation, vaccines])
 
  function renderVaccine({ item }) {
    const { title, dose, date, img, nextDose, empty, id } = item
    return (
      <Pressable onPress={() => selectVaccine(id)}>
        <Vaccine title={title} dose={dose} date={date} img={img} nextDose={`Próxima dose em ${nextDose}`} empty={empty} />
      </Pressable>
    )
    function selectVaccine(id) {
      props.selectVaccine(id)
      navigation.navigate("EditVaccine")
    }
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <View className="vaccines" style={styles.vaccines}>
          <FlatList
            data={vaccines}
            renderItem={renderVaccine}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
        <View className="form-buttons" style={styles.buttonContainer}>
          <Button title="Nova vacina" color="green" onPress={navigateToCreateVaccine} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD4D0",
  },
  buttonContainer: {
    marginBottom: 70,
  },
  vaccines: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    flex: 1,
    justifyItems: 'flex-end',
  }
});

const mapStateToProps = state => {
  const vaccines = getVaccines(state)
  return { vaccines }
}

export default connect(mapStateToProps, { selectVaccine })(Vaccines)
