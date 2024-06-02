import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { globalStyles } from "../../../styles";

export function RegisterForm(props) {
  const { showLogin } = props;
  return (
    <View>
      <TextInput label="Correo electronico" style={globalStyles.form.input} autoCapitalize="none" />
      <TextInput label="Nombre de usuario" style={globalStyles.form.input} autoCapitalize="none" />
      <TextInput label="Contraseña" style={globalStyles.form.input} secureTextEntry />
      <TextInput label="Repetir Contraseña" style={globalStyles.form.input} secureTextEntry />

      <Button mode="contained" style={globalStyles.form.btnSubmit}>
        Registrase
      </Button>

      <Button
        mode="text"
        style={globalStyles.form.btnText}
        labelStyle={globalStyles.form.btnTextLabel}
        onPress={showLogin}>
        Iniciar sesión
      </Button>
    </View>
  );
}
