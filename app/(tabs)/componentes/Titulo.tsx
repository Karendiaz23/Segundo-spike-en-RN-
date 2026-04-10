import { StyleSheet, Text } from "react-native";

const Titulo = () => {
  return <Text style={styles.title}>Lista de Compras</Text>;
};

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", marginTop: 12 },
});

export default Titulo;

