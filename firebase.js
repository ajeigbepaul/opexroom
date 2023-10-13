import {initializeApp} from "firebase/app";
import {getFirestore}from "firebase/firestore";
import {getStorage} from "firebase/storage"
import { getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
// Initialize Firebase
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "./env";
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
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
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)