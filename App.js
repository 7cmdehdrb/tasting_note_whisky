import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderView from "./src/header";
import MainView from "./src/main";
import AddView from "./src/addView";

export default function App() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  /*
    0 => Main
    1 => Add
  */
  const [mainViewState, setMainViewState] = useState(0);

  const switchBottomSheetVisible = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <HeaderView
        state={bottomSheetVisible}
        updateState={switchBottomSheetVisible}
        updateMainView={setMainViewState}
      ></HeaderView>
      {mainViewState == 0 ? <MainView></MainView> : <AddView></AddView>}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "gray", // 배경색 설정
  },
});
