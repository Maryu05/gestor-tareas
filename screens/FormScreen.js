import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useTaskForm } from "../hooks/useTaskForm";

export default function FormScreen({ navigation, route }) {
  const taskId = route.params?.id || null;

  const {
    title,
    description,
    setTitle,
    setDescription,
    saveTask,
    loading,
  } = useTaskForm(taskId);

  const handleSave = async () => {
    try {
      await saveTask("1060506230-Maryury");
      navigation.goBack();
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Título"
        style={styles.input}
      />

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Descripción (opcional)"
        style={[styles.input, { height: 100 }]}
        multiline
      />

      <Button
        title={loading ? "Guardando..." : "Guardar"}
        onPress={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: "#ddd",
    borderWidth: 1,
  },
});