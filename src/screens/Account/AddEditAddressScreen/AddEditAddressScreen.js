import { useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFormik } from "formik";
import Toast from "react-native-root-toast";
// import { addressCtrl } from "../../../api";
// import { useAuth } from "../../../hooks";
import { globalStyles } from "../../../styles";
// import { initialValues, validationSchema } from "./AddEditAddressScreen.form";
import { styles } from "./AddEditAddressScreen.styles";

export function AddEditAddressScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ title: "Crear direccion" });
  }, []);

  return (
    <KeyboardAwareScrollView extraScrollHeight={35}>
      <View style={styles.container}>
        <TextInput label="Titulo" style={globalStyles.form.input} />
        <TextInput label="Nombre y apellidos" style={globalStyles.form.input} />
        <TextInput label="Direccion" style={globalStyles.form.input} />
        <TextInput label="Codigo postal" style={globalStyles.form.input} />
        <TextInput label="Polacion" style={globalStyles.form.input} />
        <TextInput label="Estado" style={globalStyles.form.input} />
        <TextInput label="Pais" style={globalStyles.form.input} />
        <TextInput label="Telefono" style={globalStyles.form.input} />

        <Button mode="contained" style={[globalStyles.form.btnSubmit, styles.btnSubmit]}>
          Crear direccion
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
}
