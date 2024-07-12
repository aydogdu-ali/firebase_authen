import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {

  const [email, setEmail] = useState("");
  //secureTextEntry bu propertiyi verince girilen karakter gözükmez
  const [password, setPassword] = useState("");

  const navigation = useNavigation()
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
        if(user){
navigation.navigate("Home")
        }
    })
  },[])

  const handleSignUp = ()=>{
    //firebase içersinde bir method
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Kullanıcı ', user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    //firebase içersinde bir method
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <View>
            <Text style={styles.buttonText}> Giriş Yap </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.outlineButton]}
          onPress={handleSignUp}
        >
          <View>
            <Text style={styles.outlineButtonText}> Kayıt Ol </Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // ortlamak için
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  InputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 8,
  },
  buttonContainer: {
    width: "60%",
    marginTop: 35,
  },

  button: {
    backgroundColor: "blue",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
  },
  outlineButton: {
    marginTop: 5,
    backgroundColor: "green",
  },
  outlineButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
  },
});
