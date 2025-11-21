import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TaskItem({ item, onEdit, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        {item.description ? (
          <Text style={styles.description}>{item.description}</Text>
        ) : null}
      </View>

      <TouchableOpacity onPress={onEdit} style={styles.btnEdit}>
        <Text style={styles.btnText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete} style={styles.btnDelete}>
        <Text style={styles.btnText}>Del</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: "bold" },
  description: { color: "#666" },
  btnEdit: {
    backgroundColor: "#3c8bfd",
    padding: 8,
    borderRadius: 6,
    marginLeft: 10,
  },
  btnDelete: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 6,
    marginLeft: 5,
  },
  btnText: { color: "white" },
});