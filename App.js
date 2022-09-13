import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from "react-native";
import { blue } from "@mui/material/colors";

const Separator = () => <View style={styles.separator} />;

let weight;
let height;
let bmi;

const App = () => {
  const onChangeText = () => {};

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const calculateBmi = () => {
    bmi = weight / ((height * height) / 10000).toFixed(2);
    Alert.alert("Your BMI is: ", String(bmi));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>FitSTRs</Text>
        <Text style={styles.greyText}>Fitness Tools</Text>
      </View>
      <Separator />
      <View>
        <TextInput
          placeholder="Height in centimeters"
          style={styles.customInput}
          onChangeText={(newHeight) => setHeight(newHeight)}
          defaultValue={height}
          name="height"
        ></TextInput>
        <TextInput
          placeholder="Weight in kilograms"
          style={styles.customInput}
          onChangeText={(newWeight) => setWeight(newWeight)}
          defaultValue={weight}
          name="weight"
        ></TextInput>

        <Button title="Calculate BMI" onPress={() => calculateBmi()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  customInput: {
    backgroundColor: "#f2f2f2",
    padding: 5,
    margin: 5,
    width: 200,
    alignItems: "center",
    marginHorizontal: 100,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  blueButton: {
    backgroundColor: "#000",
    color: "#000",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  greyText: {
    textAlign: "center",
    color: "grey",
  },
});

export default App;
