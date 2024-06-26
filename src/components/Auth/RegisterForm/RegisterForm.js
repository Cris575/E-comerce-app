import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { globalStyles } from "../../../styles";
import { useFormik } from "formik";
import { authCtrl } from "../../../api";
import { initialValues, validateOnChange } from "./RegisterForm.form";
import Toast from "react-native-root-toast";

export function RegisterForm(props) {
  const { showLogin } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validateOnChange(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { email, username, password } = formValue;
        await authCtrl.register(email, username, password);
        showLogin();
      } catch (error) {
        Toast.show("Error al regitrar el usuario", {
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
        label="Nombre de usuario"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <TextInput
        label="Contraseña"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <TextInput
        label="Repetir Contraseña"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
      />

      <Button
        mode="contained"
        style={globalStyles.form.btnSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}>
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
