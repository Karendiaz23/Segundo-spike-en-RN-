import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export const FormularioParaItem = ({
  text,
  setText,
  addItem,
}: {
  text: string;
  setText: (text: string) => void;
  addItem: () => void;
}) => {
  return (
    <View style={styles.inputRow}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Agregar producto"
        style={styles.input}
        onSubmitEditing={addItem}
      />

      <Pressable style={styles.addBtn} onPress={addItem}>
        <Text style={styles.addTxt}>Agregar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: { flexDirection: "row", gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  addBtn: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: "center",
  },
  addTxt: { color: "#fff" },
});

export default FormularioParaItem;

