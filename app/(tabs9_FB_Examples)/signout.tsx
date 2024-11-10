import { useState, useEffect } from "react";
import { auth } from "@/firebaseConfig";
import { signOut } from "firebase/auth";

export default function Firestore() {
  const [written] = useState(false);

  useEffect(() => {
    if (!written) {
      // Listen for auth state changes
      signOut(auth);
    }
  }, [written]);

  return <></>;
}
