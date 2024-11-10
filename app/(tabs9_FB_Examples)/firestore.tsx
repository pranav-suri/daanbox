import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@/firebaseConfig";
import { Text } from "react-native";

export default function Firestore() {
  const [written] = useState(false);

  useEffect(() => {
    if (!written) {
      const writeToFirestore = async () => {
        try {
          const docRef = await addDoc(collection(firestore, "users1"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
      writeToFirestore();
    }
  }, [written]);

  return (
    <>
      <Text></Text>
    </>
  );
}
