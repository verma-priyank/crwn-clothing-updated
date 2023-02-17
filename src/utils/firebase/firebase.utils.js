import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-gJO3lHy6Qy3O-98pUrB4fdS-sDkJJq8",
  authDomain: "crwn-clothing-v3-d31b2.firebaseapp.com",
  projectId: "crwn-clothing-v3-d31b2",
  storageBucket: "crwn-clothing-v3-d31b2.appspot.com",
  messagingSenderId: "784651279736",
  appId: "1:784651279736:web:9fd80796cf79f76e7a7c8d",
  measurementId: "G-WJKJRE61M2",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const SignInwithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const CreateUserDocumentFromAuth = async (
  userauth,
  additionalInformation
) => {
  const UserDocRef = doc(db, "users", userauth.uid);

  const snapshot = await getDoc(UserDocRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userauth;
    const createdAt = new Date();
    try {
      await setDoc(UserDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    return UserDocRef;
  }
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
