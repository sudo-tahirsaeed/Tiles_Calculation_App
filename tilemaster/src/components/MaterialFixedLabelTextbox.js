import React, { Component,useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";


function MaterialFixedLabelTextbox(props) {


  return (
    <><View style={[styles.containeri, props.stylei]}>
      <Text style={styles.labeli}>{props.labeli || ""}</Text>

      <TextInput keyboardType="numeric" style={styles.inputStyle}></TextInput>

    </View><View style={[styles.containeri, props.stylei]}>
        <Text style={styles.labeli}>{props.labeli || ""}</Text>

        <TextInput keyboardType="numeric" style={styles.inputStyle}></TextInput>

      </View></>

  );
}

const styles = StyleSheet.create({
  containeri: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16
  },
  labeli: {
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    opacity: 0.5,
    alignSelf: "flex-start"
  },
  inputStylei: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    paddingLeft: 30
  }
});

export default MaterialFixedLabelTextbox;
