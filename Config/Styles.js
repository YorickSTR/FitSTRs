import styled from "styled-components";

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from "react-native";

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
