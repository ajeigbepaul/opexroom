import {initializeApp} from "firebase/app";
import {getFirestore}from "firebase/firestore";
import {getStorage} from "firebase/storage"
import { getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
};
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  asyncStorage: ReactNativeAsyncStorage,
});
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)