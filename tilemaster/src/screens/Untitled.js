import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonDanger from "../components/MaterialButtonDanger";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.tileCalculator}>TILE CALCULATOR</Text>
          <Text style={styles.byNaveedTraders}>by Naveed Traders</Text>
        </View>
        <Image
          source={require("../assets/images/image_K13o..png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <View style={styles.lengthRow}>
            <Text style={styles.length}>Length:</Text>
            <MaterialFixedLabelTextbox
              style={styles.materialFixedLabelTextbox}
            ></MaterialFixedLabelTextbox>
          </View>
          <View style={styles.widthRow}>
            <Text style={styles.width}>Width:</Text>
            <MaterialFixedLabelTextbox
              style={styles.materialFixedLabelTextbox1}
            ></MaterialFixedLabelTextbox>
          </View>
          <View style={styles.sqMInBoxRow}>
            <Text style={styles.sqMInBox}>SqM in Box:</Text>
            <MaterialFixedLabelTextbox
              style={styles.materialFixedLabelTextbox2}
            ></MaterialFixedLabelTextbox>
          </View>
          <View style={styles.tilesInBoxRow}>
            <Text style={styles.tilesInBox}>Tiles in Box:</Text>
            <MaterialFixedLabelTextbox
              style={styles.materialFixedLabelTextbox4}
            ></MaterialFixedLabelTextbox>
          </View>
          <View style={styles.priceSqMRow}>
            <Text style={styles.priceSqM}>Price(SqM):</Text>
            <MaterialFixedLabelTextbox
              style={styles.materialFixedLabelTextbox3}
            ></MaterialFixedLabelTextbox>
          </View>
          <MaterialButtonDanger
            caption="Calculate"
            style={styles.materialButtonDanger}
          ></MaterialButtonDanger>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.floor}>FLOOR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 4,
    left: 0,
    width: 375,
    height: 50,
    position: "absolute",
    backgroundColor: "rgba(74,74,74,1)"
  },
  tileCalculator: {
    fontFamily: "roboto-700",
    color: "rgba(248,231,28,1)",
    fontSize: 19,
    textAlign: "center",
    letterSpacing: 3,
    marginTop: 2,
    marginLeft: 84
  },
  byNaveedTraders: {
    fontFamily: "roboto-italic",
    color: "rgba(255,255,255,1)",
    marginLeft: 124
  },
  image: {
    position: "absolute",
    top: 0,
    left: 37,
    height: 54,
    width: 41
  },
  rectStack: {
    width: 375,
    height: 54,
    marginTop: 30
  },
  rect2: {
    top: 23,
    left: 0,
    width: 375,
    height: 705,
    position: "absolute",
    backgroundColor: "rgba(155,155,155,1)"
  },
  length: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10
  },
  materialFixedLabelTextbox: {
    height: 44,
    width: 144,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 48
  },
  lengthRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 37,
    marginRight: 78
  },
  width: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10
  },
  materialFixedLabelTextbox1: {
    height: 44,
    width: 144,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 58
  },
  widthRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 37,
    marginRight: 78
  },
  sqMInBox: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10
  },
  materialFixedLabelTextbox2: {
    height: 44,
    width: 144,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 9
  },
  sqMInBoxRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 37,
    marginRight: 78
  },
  tilesInBox: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10
  },
  materialFixedLabelTextbox4: {
    height: 44,
    width: 144,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 6
  },
  tilesInBoxRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 37,
    marginRight: 78
  },
  priceSqM: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10
  },
  materialFixedLabelTextbox3: {
    height: 44,
    width: 144,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 8
  },
  priceSqMRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 37,
    marginRight: 78
  },
  materialButtonDanger: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 45,
    marginLeft: 138
  },
  rect3: {
    top: 0,
    left: 0,
    width: 386,
    height: 31,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  floor: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    marginTop: 4,
    marginLeft: 153
  },
  rect2Stack: {
    width: 386,
    height: 728
  }
});

export default Untitled;
