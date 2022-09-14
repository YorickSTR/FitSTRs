import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from "react-native";
import BmiCalculator from "./Calculators/BmiCalculator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CalculatorsScreen = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bmi" component={BmiCalculator} />
    </Stack.Navigator>
  );
};

export default CalculatorsScreen;
