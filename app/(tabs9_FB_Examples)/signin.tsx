import { useState, useEffect } from "react";
import { auth, firestore } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Firestore() {
  const [written] = useState(false);
  const email = "pranavsuri4@gmail.com";
  const password = "password";

  useEffect(() => {
    if (!written) {
      const createUser = async () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            console.log("User signed in");
            return setDoc(doc(firestore, "users", user.uid), {
              role: "user", // Default to user role
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
          });
      };
      createUser();
    }
  }, [written]);

  return <></>;
}
