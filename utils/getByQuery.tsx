import { collection, query, getDocs, QueryConstraint } from "firebase/firestore";
import { firestore } from "@/firebaseConfig"; // Assuming you've set up Firestore in your config
import { ItemType } from "./ItemType";

export const getByQuery = async (collectionName: string, constraints: QueryConstraint[]) => {
  try {
    const itemsRef = collection(firestore, collectionName); // Replace with your collection name
    const q = query(itemsRef, ...constraints);
    const querySnapshot = await getDocs(q);

    let items: ItemType[] = [];
    querySnapshot.forEach((doc) => {
      // @ts-expect-error TODO: This is not type safe
      items.push({ id: doc.id, ...doc.data() });
    });

    console.log("Fetched:", items);
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};
