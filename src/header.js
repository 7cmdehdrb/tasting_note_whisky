import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import {
  Header,
  Icon,
  BottomSheet,
  Button,
  ListItem,
} from "react-native-elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const HeaderView = ({ state, updateState, updateMainView }) => {
  const isVisible = state;
  const setIsVisible = updateState;
  //   const [isVisible, setIsVisible] = useState(false);

  const list = [
    {
      title: "Whisky",
      containerStyle: { backgroundColor: "white" },
      titleStyle: { color: "gray", fontWeight: "bold" },
      onPress: () => {
        console.log("PRESS 1");
        setIsVisible();
        updateMainView(1);
      },
    },
    {
      title: "Wine",
      containerStyle: { backgroundColor: "white" },
      titleStyle: { color: "gray", fontWeight: "bold" },
      onPress: () => {
        console.log("PRESS 2");
        setIsVisible();
        updateMainView(1);
      },
    },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white", fontWeight: "bold" },
      onPress: () => {
        setIsVisible();
        console.log("PRESS CANCEL");
      },
    },
  ];

  const handleMenu = () => {
    console.log("MENU");
  };

  const handleHome = () => {
    console.log("HOME");
    updateMainView(0);
  };

  const handlePlus = () => {
    setIsVisible(true);
    console.log("PLUS");
  };

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Header
        backgroundColor="orange"
        leftComponent={
          <TouchableOpacity style={styles.headerRight} onPress={handleMenu}>
            <Icon name="menu" type="entypo" color="#fff"></Icon>
          </TouchableOpacity>
        }
        centerComponent={
          <TouchableOpacity onPress={handleHome}>
            <Text style={styles.text}>APPLICATION</Text>
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity style={styles.headerRight} onPress={handlePlus}>
            <Icon name="pluscircleo" type="antdesign" color="#fff"></Icon>
          </TouchableOpacity>
        }
      ></Header>

      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    width: "100%",
    marginTop: 0,
    marginBottom: 20,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default HeaderView;
