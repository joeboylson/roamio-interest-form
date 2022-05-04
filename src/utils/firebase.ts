import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyD36xnHCwCMgsv0WY8vdMlD1HHp-KSgbkU",
  authDomain: "roamio-interest-form.firebaseapp.com",
  databaseURL: "https://roamio-interest-form-default-rtdb.firebaseio.com",
  projectId: "roamio-interest-form",
  storageBucket: "roamio-interest-form.appspot.com",
  messagingSenderId: "76895133294",
  appId: "1:76895133294:web:6093a41d4a3b9b58cfd07f"
};
  
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);