import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount"
import CreateVaccine from "./pages/CreateVaccine"
import Vaccines from "./pages/Vaccines"
import ForgotPassword from './pages/ForgotPassword';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Vaccines" component={Vaccines} />
        <Drawer.Screen name="CreateAccount" component={CreateAccount} />
        <Drawer.Screen name="CreateVaccine" component={CreateVaccine} />
        <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
