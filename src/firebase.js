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
  apiKey: "AIzaSyCqHJZXLdJHlxDV8t9pRIA_tOn7oreUCM0",
  authDomain: "car-racing-57ff4.firebaseapp.com",
  projectId: "car-racing-57ff4",
  storageBucket: "car-racing-57ff4.appspot.com",
  messagingSenderId: "592006086642",
  appId: "1:592006086642:web:6620d741b227943202356b",
};

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
