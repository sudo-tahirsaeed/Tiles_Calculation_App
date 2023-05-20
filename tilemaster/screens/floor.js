import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Switch,
  Share,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
// import TextInput from "./src/components/TextInput";
// import MaterialButtonDanger from "./src/components/MaterialButtonDanger";
// import Share from 'react-native-share';
import React, { useEffect, useRef, useState } from "react";
import * as Sharing from "expo-sharing";
import * as ImagePicker from "expo-image-picker";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import { Picker } from "@react-native-picker/picker";
// import { ScrollView } from 'react-native-web';
const { SaveFormat } = ImagePicker;

export default function Floor() {
  const [isEnabled, setIsEnabled] = useState(false);

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [door, setDoor] = useState("");
  const [wallHeight, setWallHeight] = useState("");
  const [tilearea, setTileArea] = useState("");
  const [lh, setLH] = useState("");

  const [priceBox, setPriceBox] = useState("");
  const [tl, setTL] = useState("");
  const [th, setTH] = useState("");
  const [ds, setDS] = useState("");
  const [ms, setMS] = useState("");
  const [ls, setLS] = useState("");
  const [m, setm] = useState("");
  const [d, setd] = useState("");
  const [l, setl] = useState("");
  const [b, setb] = useState("");
  const [p, setp] = useState("");

  const options = ["1", "2", "3", "4", "5", "6"];

  const optiona = ["1.44", "1.5", "1.3", "1.21"];
  const optionc = ["12x24", "10x20", "8x26", "9x36"];

  const [type, setType] = useState(options[0]);
  function calculateTiles(
    length,
    width,
    door,
    wallheight,
    tilearea,
    pricebox,
    tl,
    th,
    ds,
    ms,
    ls
  ) {
    const area =
      parseFloat(length) +
      parseFloat(length) +
      parseFloat(width) +
      parseFloat(width) -
      parseFloat(door);

    let areainmeter = area * parseFloat(wallheight);
    areainmeter = areainmeter / 10.76;
    // console.log("Area in M: " + areainmeter.toFixed(2));

    const boxes = Math.ceil(areainmeter / parseFloat(tilearea));
    const totalprice = boxes * parseFloat(pricebox);

    const motive = (area * parseFloat(th)) / parseFloat(tl);
    const dark = (area * parseFloat(th)) / parseFloat(tl);
    const light = (area * parseFloat(th)) / parseFloat(tl);

    setm(Math.ceil(motive * parseFloat(ms)));
    setd(Math.ceil(dark * parseFloat(ds)));
    setl(Math.ceil(light * parseFloat(ls)));
    setb(boxes);
    setp(totalprice);
    console.log(m + "MOY " + d + "FST " + l + " " + b + " " + p + " ");
    setModalVisible1(true);
  }

  const [output, setout] = useState({
    meter: null,

    totalprice: null,
    totaltiles: null,
    box: null,
  });
  // const roboto = require('./fonts/roboto-700.ttf');

  // const roboto_italic = require('./fonts/roboto-italic.ttf');
  const [vals, setval] = useState({
    length: null,
    width: null,
    sqinbox: null,
    tilesinbox: null,
    price: null,
  });

  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisible1, setModalVisible1] = useState(false);
  function handlePress() {
    var areai = vals.length * vals.width;

    meteri = areai / 10.76;
    meteri = meteri.toFixed(2);

    var boxi = meteri / vals.sqinbox;
    boxi = Math.round(boxi);

    var complete = boxi * vals.sqinbox;

    var totalpricei = complete * vals.price;
    totalpricei = Math.round(totalpricei);

    var totaltilesi = vals.tilesinbox * boxi;
    setout({
      totaltiles: totaltilesi,
      meter: meteri,
      totalprice: totalpricei,
      box: boxi,
    });

    setModalVisible(true);
  }

  const data = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
  ];

  const onShare = async () => {
    const ar = output.meter;
    const bx = output.box;
    const tt = output.totaltiles;
    const tp = output.totalprice;

    try {
      const result = await Share.share({
        message:
          "*** *FLOOR/FUTURE WALL TRADERS* ***\n" +
          "TOTAL AREA: " +
          ar +
          "\n" +
          "TOTAL BOXES: " +
          bx +
          "\n" +
          "TOTAL TILES: " +
          tt +
          "\n" +
          "*TOTAL PRICE*: " +
          tp,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onShare1 = async () => {
    try {
      const result = await Share.share({
        message:
          "*** *WALL ESTIMATE* ***\n" +
          "TOTAL LIGHT: " +
          l +
          "\n" +
          "TOTAL DARK: " +
          d +
          "\n" +
          "TOTAL MOTIVE: " +
          m +
          "\n" +
          "\n*TOTAL BOXES*: " +
          b +
          "*TOTAL PRICE:* " +
          p,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
 
  const handleClearText = () => {
    console.log("clear");
    const emptyObject = {};

    for (const key in vals) {
      emptyObject[key] = '';
    }

    setval(emptyObject);
  };

  return (
    <SafeAreaView style={styles.area}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalhead}>Results</Text>

                <Text style={styles.modalText}>Total SqM: {output.meter} </Text>

                <Text style={styles.modalText}>Total Boxes: {output.box}</Text>
                <Text style={styles.modalText}>
                  Total Tiles: {output.totaltiles}
                </Text>

                <Text style={styles.modalText}>PRICE: {output.totalprice}</Text>

                <Pressable
                  style={[styles.button, styles.buttonshare]}
                  onPress={onShare}
                >
                  <Text style={styles.textStyle}>Share </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close </Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <View style={styles.area}>
            <View style={styles.lengthRow}>
              <Text style={styles.length}>Length:</Text>

              <TextInput
                keyboardType="numeric"
                textAlign="center"
                textAlignVertical="center"
                text
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setval({ ...vals, length: text })}
                style={styles.TextInput1}
              ></TextInput>
            </View>
            <View style={styles.widthRow}>
              <Text style={styles.width}>Width:</Text>
              <TextInput
                keyboardType="numeric"
                textAlign="center"
                textAlignVertical="center"
                text
                multiline={true}
                numberOfLines={4}
                style={styles.TextInput2}
                onChangeText={(text) => setval({ ...vals, width: text })}
              ></TextInput>
            </View>
            <View style={styles.sqMInBoxRow}>
              <Text style={styles.sqMInBox}>SqM in Box:</Text>
              <TextInput
                keyboardType="numeric"
                textAlign="center"
                textAlignVertical="center"
                text
                multiline={true}
                numberOfLines={4}
                style={styles.TextInput}
                onChangeText={(text) => setval({ ...vals, sqinbox: text })}
              ></TextInput>
            </View>
            <View style={styles.tilesInBoxRow}>
              <Text style={styles.tilesInBox}>Tiles in Box:</Text>
              <TextInput
                keyboardType="numeric"
                textAlign="center"
                textAlignVertical="center"
                text
                multiline={true}
                numberOfLines={4}
                style={styles.TextInput}
                onChangeText={(text) => setval({ ...vals, tilesinbox: text })}
              ></TextInput>
            </View>
            <View style={styles.priceSqMRow}>
              <Text style={styles.priceSqM}>Price(SqM):</Text>
              <TextInput
                keyboardType="numeric"
                textAlign="center"
                textAlignVertical="center"
                text
                multiline={true}
                numberOfLines={4}
                style={styles.TextInput}
                onChangeText={(text) => setval({ ...vals, price: text })}
              ></TextInput>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handlePress} style={styles.touchf}>
                <Text style={styles.touchte}>Calculate</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.touchff}
                onPress={handleClearText}
              >
                <Text style={styles.touchte}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    backgroundColor: "#c8c4c4",
    flex: 1,
    paddingHorizontal: 10,
    // justifyContent:'center',
  },
  modalhead: {
    textAlign: "center",

    color: "#960018",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  touchff: {
    height: 50,
    width: 140,
    backgroundColor: "white",
    marginLeft: 50,
    color: "black",
    marginTop: 10,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: 250,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#9e1b32",
  },

  buttonshare: {
    backgroundColor: "#2196F3",
    marginBottom: 15,
    width: 100,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  touchte: {
    color: "blue",
    fontSize: 18,
    paddingTop: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  touch: {
    height: 40,
    width: 140,
    backgroundColor: "#4d72a1",

    color: "black",
    marginTop: 20,
    marginLeft: 130,
    borderRadius: 15,
  },

  touchf: {
    height: 50,
    width: 140,
    backgroundColor: "white",

    color: "black",
    marginTop: 10,
    borderRadius: 10,
  },
  containeri: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16,
  },
  labeli: {
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    opacity: 0.5,
    alignSelf: "flex-start",
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
    paddingLeft: 30,
  },
  container: {
    flex: 1,
  },
  rect: {
    top: -2,
    left: 0,
    width: 400,
    height: 80,
    position: "absolute",
    backgroundColor: "#4d72a1",
  },
  tileCalculator: {
    // fontFamily: "roboto-700",
    // fontFamily: 'Arial',
    color: "white",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 3,
    marginTop: 15,
    marginLeft: 34,
  },
  byNaveedTraders: {
    // fontFamily: "roboto-italic",
    color: "rgba(255,255,255,1)",
    marginLeft: 165,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 60,
    height: 54,
    width: 41,
  },
  rectStack: {
    width: 300,
    height: 54,
    marginTop: 30,
  },

  length: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "500",
  },
  lengthRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 27,
    // marginLeft: 37,
    // marginRight: 78,
  },
  width: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "500",
  },
  widthRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 11,
    // marginLeft: 37,
    // marginRight: 78,
  },
  sqMInBox: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "500",
  },
  sqMInBoxRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 11,
    fontWeight: "500",
  },
  tilesInBox: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "500",
  },
  TextInput: {
    height: 45,
    width: 200,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 20,
    fontSize: 22,
    borderRadius: 10,
  },
  TextInput1: {
    height: 45,
    width: 200,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 60,
    fontSize: 22,
    borderRadius: 10,
  },

  TextInput2: {
    height: 45,
    width: 200,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 70,
    fontSize: 22,
    borderRadius: 10,
  },
  tilesInBoxRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 12,
  },
  priceSqM: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "500",
  },
  TextInput3: {
    height: 44,
    width: 144,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 8,
    fontSize: 22,
    borderRadius: 12,
  },
  priceSqMRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 20,
  },
  materialButtonDanger: {
    height: 36,
    width: 50,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 45,
    marginLeft: 140,
  },
  rect3: {
    flexDirection: "row",
    top: 0,
    left: 0,
    width: 420,
    height: 31,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    textAlign: "center",
  },
  floor: {
    // fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    marginTop: 4,
    marginLeft: "30%",
  },

  containerx: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    width: 120,
    marginLeft: 5,
    fontWeight: "500",
    fontSize: 18,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    backgroundColor: "white",
    borderRadius: 12,
  },
});
