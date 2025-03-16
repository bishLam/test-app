import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useUser} from "../contexts/UserContext"
import { toast } from '@/lib/toast'

const Home = () => {
  const userAuth = useUser();


    const logout = async () => {
      try{
      userAuth?.logout()
    }
    catch(error:unknown){
      toast(`${error}`)
    }
  }

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity style={{backgroundColor: "cyan"}} onPress={logout}>
          <Text>Log out </Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})