import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type Item = {
  id: string;
  name: string;
  done: boolean;
};

type Props = {
  items: Item[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export const ListaDeCompras = ({ items, onToggle, onRemove }: Props) => {
  const renderItem = ({ item }: { item: Item }) => (
    <Pressable
      onPress={() => onToggle(item.id)}
      onLongPress={() => onRemove(item.id)}
      style={styles.row}
    >
      <Text style={[styles.rowText, item.done && styles.done]}>
        {item.name}
      </Text>

      <Text
        style={[styles.pill, item.done ? styles.pillDone : styles.pillTodo]}
      >
        {item.done ? "✓" : "•"}
      </Text>
    </Pressable>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(it) => it.id}
      renderItem={renderItem}
      ListEmptyComponent={
        <Text style={styles.empty}>Sin productos. ¡Agregá el primero! 😊</Text>
      }
      ItemSeparatorComponent={() => <View style={styles.sep} />}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowText: { fontSize: 16 },
  done: { textDecorationLine: "line-through", color: "#999" },
  pill: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
  },
  pillTodo: { backgroundColor: "#eee", color: "#666" },
  pillDone: { backgroundColor: "#2ecc71", color: "#fff" },
  sep: { height: 1, backgroundColor: "#eee" },
  empty: { textAlign: "center", color: "#777", marginTop: 24 },
});

export default ListaDeCompras;

