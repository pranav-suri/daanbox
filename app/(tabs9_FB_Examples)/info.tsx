import { useState, useEffect } from "react";
import { auth } from "@/firebaseConfig";

export default function Firestore() {
  const [written] = useState(false);

  useEffect(() => {
    if (!written) {
      // Listen for auth state changes
      const user = auth.currentUser;
      console.log(user);
    }
  }, [written]);

  return <></>;
}
