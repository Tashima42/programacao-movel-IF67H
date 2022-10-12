import React, { useState } from "react"
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import iconVaccine from "../assets/icon-vaccine.png"
import iconLeave from "../assets/leave.png"
import { connect } from "react-redux"
import { getUser } from "../redux/selectors"

function CustomDrawer(props) {
  const [name] = useState(props.user.name ? props.user.name : "" )
  const { navigation } = props
  function navigateToVaccines() { navigation.navigate('Vaccines') }
  function navigateToLogin() { navigation.navigate('Login') }
  return (
    <View style={styles.container}>
      <Text style={styles.modalText}>Ola {name}</Text>
      <View style={styles.line}></View>
      <View style={styles.list}>
        <Pressable style={styles.pressable} onPress={navigateToVaccines}>
          <View style={styles.content}>
            <Image source={iconVaccine} style={styles.icon}></Image>
            <Text style={styles.pressableText}>Minhas vacinas</Text>
          </View>
        </Pressable>
        <Pressable style={styles.pressable} onPress={navigateToLogin}>
          <View style={styles.content}>
            <Image source={iconLeave} style={styles.icon}></Image>
            <Text style={styles.pressableText}>Sair</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifySelf: "flex-start",
    backgroundColor: "#ADD4D0",
    width: "100%",
    height: "100%",
  },
  modalText: {
    marginTop: 70,
    fontSize: 30,
    textAlign: "center",
    color: "#419ED7",
  },
  line: {
    backgroundColor: "#419ED7",
    alignSelf: "center",
    width: "70%",
    height: 1,
    marginTop: 20,
    marginBottom: 40,
  },
  content: {
    alignSelf: "flex-start",
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  pressableText: {
    alignSelf: "center",
    fontSize: 20,
    color: "#419ED7",
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  }
});
const mapStateToProps = state => {
  const user = getUser(state)
  return { user }
}

export default connect(mapStateToProps)(CustomDrawer)