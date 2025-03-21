import { FormLabel } from '@/components/FormLabel'
import { useUser } from '@/contexts/UserContext'
import { toast } from '@/lib/toast'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { } from 'react-native-gesture-handler'
import { blue } from 'react-native-reanimated/lib/typescript/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {
  const userAuth = useUser();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)
  const [message, setMessage] = useState("")

  const handleButtonPress = async () => {

    if(email.trim() == "" || password.trim() == ""){
      setMessage("Please fill in the required fields")
      return
    }
    
    const isValidEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    if(!isValidEmail){
      setMessage("Email is not valid")
      return
    }

    if(password.length < 6){
      setMessage("Password should be at least 6 characters")
      return
    }

    if(password != repeatPassword){
      setMessage("Passwords do not match")
      return
    }

    setMessage("")
    try{
      await userAuth?.register(email, password)
    }
    catch(error){
      toast(`${error}`)
    }
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.container}>
        <Text style={styles.headingText}> Create an account </Text>
        <FormLabel color="darkblue" bg="white" text="Email" />
        <TextInput style={styles.input}
          value={email}
          onChangeText={(val) => setEmail(val)}

        />

        <FormLabel color="darkblue" bg="white" text="Password" />
        <TextInput style={styles.input}
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        <FormLabel color="darkblue" bg="white" text="Repeat Password" />
        <TextInput style={styles.input}
          value={repeatPassword}
          onChangeText={(val) => setRepeatPassword(val)}
        />
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity onPress={handleButtonPress} style={styles.logInButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.toSigninText}>
          {/* takes us to the login page */}
          <Link href='/' style={styles.link}> Already have an account ? Sign In Instead </Link>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create(
  {
    mainView: {
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
      flex: 1
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
    toSigninText: {
      marginTop: 5,
      color: "white",
      fontWeight: 600,
      textAlign: "center",
      textDecorationLine: "underline"
    },

    link: {
      color: "white"
    },

    message: {
      color: "red"
    }


  }
)


