import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  addDoc,
  updateDoc,
  doc,
  getDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

export const useTaskForm = (taskId = null) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (taskId) loadTask();
  }, [taskId]);

  const loadTask = async () => {
    const docRef = doc(db, "tasks", taskId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data();
      setTitle(data.title);
      setDescription(data.description || "");
    }
  };

  const saveTask = async (studentId) => {
    if (!title.trim()) throw new Error("El título es obligatorio");

    setLoading(true);

    try {
      if (taskId) {
        const docRef = doc(db, "tasks", taskId);
        await updateDoc(docRef, {
          title,
          description,
          updatedAt: serverTimestamp(),
        });
      } else {
        const collectionRef = collection(db, "tasks");
        await addDoc(collectionRef, {
          title,
          description,
          studentId,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    title,
    description,
    setTitle,
    setDescription,
    saveTask,
    loading,
  };
};