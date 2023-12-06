import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainView = () => {
  return (
    <View style={styles.container}>
      <Text>MAIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red", // 배경색 설정
  },
});

export default MainView;
