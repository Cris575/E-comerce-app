import { View, Text, Image, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { styles } from "./AuthScreen,styles";
import { LoginForm, RegisterForm } from "../../../components/Auth";
import logo from "../../../../assets/Logo.png";

export function AuthScreen() {
  const [showLogin, setShowLogin] = useState(false);

  const onShowLoginregistrer = () => setShowLogin((prevState) => !prevState);
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      {/* <KeyboardAvoidingView behavior={(Platform.OS = "and" ? "padding" : "height")}> */}
      {showLogin ? <LoginForm /> : <RegisterForm showLogin={onShowLoginregistrer} />}
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}
