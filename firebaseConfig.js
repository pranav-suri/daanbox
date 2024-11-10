import { initializeApp } from "firebase/app";
/* 
getReactNativePersistence works but looks like it has not been defined in the types
Found this from stack overflow 
https://stackoverflow.com/questions/76779282/react-native-firebase-auth-persistence-cannot-import-getreactnativepersistence 
*/
// eslint-disable-next-line import/named
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Optionally import the services that you want to use
// import {...} from "firebase/analytics";
// import {...} from "firebase/databases";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd4bG_nHp12s3EkUTknZDtt-Y9mfgoi5c",
  authDomain: "daanbox-1.firebaseapp.com",
  projectId: "daanbox-1",
  storageBucket: "daanbox-1.firebasestorage.app",
  messagingSenderId: "863318499694",
  appId: "1:863318499694:web:9ccaed1c623852d01fe17f",
  measurementId: "G-2SN8EFNLHM",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// const analytics = getAnalytics(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
