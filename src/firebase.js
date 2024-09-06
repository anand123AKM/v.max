import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  apiKey: "AIzaSyD6yg9GB0xPQAglYEkq_OvwyK6oJkiTnNs",
  authDomain: "vmax-6a873.firebaseapp.com",
  projectId: "vmax-6a873",
  storageBucket: "vmax-6a873.appspot.com",
  messagingSenderId: "180202539858",
  appId: "1:180202539858:web:eb6d65409c24e67104888b",
  measurementId: "G-CF51DQQN5L",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
