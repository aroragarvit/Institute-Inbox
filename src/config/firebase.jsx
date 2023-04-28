import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiKT--M5urs0FkSbVhRShgPBAonmo8SY4",
  authDomain: "institute-inbox.firebaseapp.com",
  projectId: "institute-inbox",
  storageBucket: "institute-inbox.appspot.com",
  messagingSenderId: "398645319055",
  appId: "1:398645319055:web:ad2bef3587e36f1f6227fa",
  measurementId: "G-MN4S08S1ZY",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const messaging = firebase.messaging();
const firestore = firebase.firestore();

export { auth, messaging, firestore };
