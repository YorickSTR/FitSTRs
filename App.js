import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StartScreen from "./Components/StartScreen";
import CalculatorsScreen from "./Components/CalculatorsScreen";
import { appBarClasses } from "@mui/material";

function HomeScreen() {
  return <StartScreen />;
}

function CalcScreen() {
  return <CalculatorsScreen />;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={HomeScreen} />
        <Tab.Screen name="Calculators" component={CalcScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginHorizontal: 20,
//   },
//   customInput: {
//     backgroundColor: "#f2f2f2",
//     padding: 5,
//     margin: 5,
//     width: 200,
//     alignItems: "center",
//     marginHorizontal: 100,
//     textAlign: "center",
//   },
//   title: {
//     textAlign: "center",
//     marginVertical: 8,
//   },
//   blueButton: {
//     backgroundColor: "#000",
//     color: "#000",
//   },
//   fixToText: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   header: {
//     textAlign: "center",
//     fontSize: 30,
//     marginVertical: 8,
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   greyText: {
//     textAlign: "center",
//     color: "grey",
//   },
// });
