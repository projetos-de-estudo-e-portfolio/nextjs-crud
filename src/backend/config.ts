import * as firebase from "firebase/app";
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

if (!firebase.getApps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMIAN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
  const app = getApp();
}

export default firebase