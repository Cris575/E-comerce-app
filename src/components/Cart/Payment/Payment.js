import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { globalStyles } from "../../../styles";
import { styles } from "./Payment.styles";

export function Payment(props) {
  const { totalPayment, selectedAddress, products } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forma de pago</Text>
      <TextInput label="Nombre del titular" style={globalStyles.form.input} />
      <TextInput label="Numero de tarjeta" style={globalStyles.form.input} />

      <View style={styles.inputGroup}>
        <View style={styles.viewMonthYearInputs}>
          <TextInput label="Mes" style={styles.inputDate} />
          <TextInput label="Año" style={styles.inputDate} />
        </View>
        <TextInput label="CVV/CVC" style={styles.inputCvc} />
      </View>
      <Button mode="contained" contentStyle={styles.btnContent} labelStyle={styles.btnText}>
        Pagar ${totalPayment && `(${totalPayment})`}
      </Button>
    </View>
  );
}
