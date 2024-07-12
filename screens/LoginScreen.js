import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView>
      <View>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Şifre" />
      </View>

      <TouchableOpacity>
        <View>
          <Text> Giriş Yap </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Text> Kayıt Ol </Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
