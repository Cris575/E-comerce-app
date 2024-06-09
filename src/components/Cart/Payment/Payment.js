import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { globalStyles } from "../../../styles";
import { styles } from "./Payment.styles";
import { initialValues, validationSchema } from "./Payment.form";
import { useFormik } from "formik";
import Toast from "react-native-root-toast";

export function Payment(props) {
  const { totalPayment, selectedAddress, products } = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
      } catch (error) {
        Toast.show("Erro al realizar el pago", {
          position: Toast.positions.CENTER,
        });
      }
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forma de pago</Text>

      <TextInput
        label="Nombre del titular"
        style={globalStyles.form.input}
        onChangeText={(text) => formik.setFieldValue("name", text)}
        value={formik.values.name}
        error={formik.errors.name}
      />
      <TextInput
        label="Numero de tarjeta"
        style={globalStyles.form.input}
        onChangeText={(text) => formik.setFieldValue("number", text)}
        value={formik.values.number}
        error={formik.errors.number}
      />

      <View style={styles.inputGroup}>
        <View style={styles.viewMonthYearInputs}>
          <TextInput
            label="Mes"
            style={styles.inputDate}
            onChangeText={(text) => formik.setFieldValue("exp_month", text)}
            value={formik.values.exp_month}
            error={formik.errors.exp_month}
          />
          <TextInput
            label="Año"
            style={styles.inputDate}
            onChangeText={(text) => formik.setFieldValue("exp_year", text)}
            value={formik.values.exp_year}
            error={formik.errors.exp_year}
          />
        </View>
        <TextInput
          label="CVV/CVC"
          style={styles.inputCvc}
          onChangeText={(text) => formik.setFieldValue("cvc", text)}
          value={formik.values.cvc}
          error={formik.errors.cvc}
        />
      </View>

      <Button
        mode="contained"
        contentStyle={styles.btnContent}
        labelStyle={styles.btnText}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}>
        Pagar ${totalPayment && `(${totalPayment.toFixed(2)})`}
      </Button>
    </View>
  );
}
