import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";

const App = () => {
  const [isTfReady, setIsTfReady] = useState(false);

  useEffect(() => {
    const initializeTf = async () => {
      await tf.ready();
      setIsTfReady(true);
    };
    initializeTf();
  }, []);

  return (
    <View style={styles.container}>
      {isTfReady ? (
        <Text>TensorFlow is ready!</Text>
      ) : (
        <Text>Loading TensorFlow...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
