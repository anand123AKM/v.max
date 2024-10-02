import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, deleteObject } from "firebase/storage";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID,
};

console.log(import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const deleteVideo = async (videoId, videoURL) => {
  try {
    const videoDocRef = doc(db, "videos", videoId);
    await deleteDoc(videoDocRef);
    const videoRef = ref(storage, videoURL);
    await deleteObject(videoRef);

    console.log("Video deleted successfully");
  } catch (error) {
    console.error("Error deleting video: ", error);
  }
};

export {
  storage,
  auth,
  db,
  collection,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  getDocs,
};
