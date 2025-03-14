import { FormLabel } from '@/components/FormLabel'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { blue } from 'react-native-reanimated/lib/typescript/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUser } from '../contexts/UserContext';
import { useState } from 'react'


export default function Login({...props}) {
  const [form, setForm] = useState({
    email : "",
    password : ""}
  )

  const handlePress = async() => {
    console.log(form.email)
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.container}>
        <Text style={styles.headingText}> Sign in to your account</Text>
        <FormLabel color="darkblue" bg="white" text="Email" fontSize="22" />
        <TextInput  onChangeText= {(e) => {setForm({...form, email:e})}} style={styles.input} />
        <FormLabel color="darkblue" bg="white" text="Password" fontSize="22" />
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.logInButton} onPress={handlePress}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <Text style = {styles.toSignupText}> 
          <Link href='/signup' style = {styles.link}> Don't have an account ? Sign up Instead </Link>
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    mainView: {
      backgroundColor: "green",
      alignItems:"center",
      justifyContent:"center",
      flex:1
    },


    container: {
      backgroundColor: "green",
    },

    input: {
      backgroundColor: "white",
      padding: 5,
      marginHorizontal: 15,
      borderStyle: "solid",
      borderColor: "Black",
      borderWidth: 2,
      marginBottom: 9
    },

    headingText: {
      fontSize: 25,
      marginBottom: 17,
      textAlign: "center"
    },

    logInButton: {
      backgroundColor: "blue",
      marginHorizontal: 20,
      borderRadius: 8,
      width: 150,
      alignSelf: "center",
      paddingHorizontal: 25,
      paddingVertical: 10

    },

    buttonText: {
      textAlign: "center",
      color: "white",
      fontWeight: 800,
      fontSize: 20
    },

    toSignupText: {
      marginTop: 5,
      color: "white",
      fontWeight: 600,
      textAlign: "center",
      textDecorationLine: "underline"
    },

    link : {
      color: "white"
    }


  }
)

