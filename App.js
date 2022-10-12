import '@react-native-async-storage/async-storage'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import React from "react"
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount"
import CreateVaccine from "./pages/CreateVaccine"
import EditVaccine from "./pages/EditVaccine"
import Vaccines from "./pages/Vaccines"
import ForgotPassword from './pages/ForgotPassword';
import { useFonts } from "expo-font"
import { Provider } from "react-redux"
import store from "./redux/store"
import CustomDrawer from './components/CustomDrawer';

export default function App() {
  const [loaded] = useFonts({ AveriaLibre: require("./assets/fonts/AveriaLibre-Regular.ttf") })
  if (!loaded) return null

  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false, }} style={{ backgroundColor: "#ADD4D0" }} drawerContent={(props) => <CustomDrawer {...props}/>}>
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Vaccines" component={Vaccines} />
          <Drawer.Screen name="EditVaccine" component={EditVaccine} />
          <Drawer.Screen name="CreateAccount" component={CreateAccount} />
          <Drawer.Screen name="CreateVaccine" component={CreateVaccine} />
          <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
