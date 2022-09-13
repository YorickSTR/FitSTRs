import * as React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { Alert } from "react-native";

const BmiCalculator = ({}) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  let bmi;
  let bmiFixedString;

  const calculateBmi = () => {
    bmi = weight / ((height * height) / 10000);
    bmiFixedString = String(bmi.toFixed(1));
    Alert.alert("Your BMI is: ", bmiFixedString);
  };

  return (
    <Container>
      <CalculatorBox>
        <Text>BMI Calculator</Text>
        <SubText>Check if your weight is within a healthy range</SubText>
        <CustomInput
          placeholder="Height in centimeters"
          onChangeText={(newHeight) => setHeight(newHeight)}
          defaultValue={height}
          name="height"
        ></CustomInput>
        <CustomInput
          placeholder="Weight in kilograms"
          onChangeText={(newWeight) => setWeight(newWeight)}
          defaultValue={weight}
          name="weight"
        ></CustomInput>

        <CustomButton title="Calculate BMI" onPress={() => calculateBmi()}>
          Check BMI
        </CustomButton>
      </CalculatorBox>
    </Container>
  );
};

//Styled Components
const Container = styled.View`
  background-color: white;

  padding: 30px;
`;
const Text = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;
const SubText = styled.Text`
  font-size: 15px;
  font-weight: 100px;
`;
const CalculatorBox = styled.View`
  padding: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
`;
const CustomInput = styled.TextInput`
  background-color: white;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 15px;
`;
const CustomButton = styled.Text`
  background-color: rgb(0, 80, 250);
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  color: white;

  font-size: 17px;
`;
//End Styled Components
export default BmiCalculator;
