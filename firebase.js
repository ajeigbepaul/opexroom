import {initializeApp} from "firebase/app";
import {getFirestore}from "firebase/firestore";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFis3KHQh8wThtcghn6Udi-OQVNpbGlHQ",
  authDomain: "opexroom-f149e.firebaseapp.com",
  projectId: "opexroom-f149e",
  storageBucket: "opexroom-f149e.appspot.com",
  messagingSenderId: "80599270941",
  appId: "1:80599270941:web:46a6c0123f2da5b040a8f4",
  measurementId: "G-K0SJTVZ0VJ",
};
// Initialize Firebase app if not already initialized
// const app = firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.app();

// const db = app.firestore();
// const auth = firebase.auth();

// export { db, auth };
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)