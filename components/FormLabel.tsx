import { View, Text, StyleSheet } from "react-native";

import React from 'react';

export const FormLabel = (props:any) => {
  return (
    <View style = {styles.label}>
      <Text style={{color: props.color, fontSize: props.fontSize}}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    label: {
      marginTop : 10,
      marginBottom: 3,
      marginLeft: 9,
      
    }
  }
)
