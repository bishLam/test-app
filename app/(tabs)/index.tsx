import { Image, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style = {styles.container}>
      <TouchableOpacity style= {styles.button}>
        <Text>Login / Signup</Text>
      </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {

  },

  button: {
    backgroundColor: 'lightblue',
    // border: '1px solid black',

    // width: "max-content"

  }
});
