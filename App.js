import analytics from "@react-native-firebase/analytics";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const predefinedEvent = async () => {
    await analytics().logLogin({
      method: "google",
    });
  };

  const addToBasketEvent = async () =>
    await analytics().logEvent("add_to_cart", {
      id: 3745092,
      description: "mens grey t-shirt",
      items: ["round neck", "long sleeved"],
      size: "L",
    });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Login with Google" onPress={predefinedEvent} />
      <Button title="Add To Basket" onPress={addToBasketEvent} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
