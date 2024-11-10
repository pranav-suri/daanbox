import { useState, useEffect } from "react";
import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Firestore() {
  const [written] = useState(false);
  const email = "pranavsuri4@gmail.com";
  const password = "password";

  useEffect(() => {
    if (!written) {
      const createUser = async () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            console.log("User signed up");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ..
          });
      };
      createUser();
    }
  }, [written]);

  return <></>;
}
