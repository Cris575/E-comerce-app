import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import Toast from "react-native-root-toast";
import { authCtrl, authCtrlt } from "../../../api";
import { globalStyles } from "../../../styles";
import { initialValues, validationSchema } from "./LoginForm.form";

export function LoginForm(props) {
  const { showRegister } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { email, password } = formValue;
        const response = await authCtrl.login(email, password);
        console.log(response);
      } catch (error) {
        Toast.show("Usuario o contraseña incorrecto", {
          position: Toast.positions.CENTER,
        });
      }
    },
  });
  return (
    <View>
      <TextInput
        label="Correo electronico"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        label="Contraseña"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button
        mode="contained"
        style={globalStyles.form.btnSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}>
        Entrar
      </Button>

      <Button
        mode="text"
        style={globalStyles.form.btnText}
        labelStyle={globalStyles.form.label}
        onPress={showRegister}>
        Registrarse
      </Button>
    </View>
  );
}
