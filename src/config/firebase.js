import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiKT--M5urs0FkSbVhRShgPBAonmo8SY4",
  authDomain: "institute-inbox.firebaseapp.com",
  projectId: "institute-inbox",
  storageBucket: "institute-inbox.appspot.com",
  messagingSenderId: "398645319055",
  appId: "1:398645319055:web:ad2bef3587e36f1f6227fa",
  measurementId: "G-MN4S08S1ZY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth();
export const db = app.firestore();
