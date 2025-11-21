import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from "react-native";
import { db } from "../config/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import TaskItem from "../components/TaskItem";

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const ref = collection(db, "tasks");
    const q = query(ref, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setTasks(list);
    });

    return () => unsubscribe();
  }, []);

  const deleteTask = (id) => {
    Alert.alert("Eliminar", "¿Seguro que quieres eliminar esta tarea?", [
      { text: "Cancelar" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          await deleteDoc(doc(db, "tasks", id));
        },
      },
    ]);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            onEdit={() => navigation.navigate("Form", { id: item.id })}
            onDelete={() => deleteTask(item.id)}
          />
        )}
      />

      <TouchableOpacity
        style={styles.btnAdd}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.btnText}>+ Nuevo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: "#0a7",
    padding: 15,
    borderRadius: 10,
    position: "absolute",
    bottom: 30,
    right: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});