import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDm1-1ijeYfjAukGcBPjx-42jDNatVkk30",
//     authDomain: "smilefoundation-93974.firebaseapp.com",
//     projectId: "smilefoundation-93974",
//     storageBucket: "smilefoundation-93974.appspot.com",
//     messagingSenderId: "62691773440",
//     appId: "1:62691773440:web:2fdaa6e121141dddee1ce5",
//     measurementId: "G-T2K5HJMWQF"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAvdql_g8rEOAQ0UC0S4fZQS8xnPySa6_4",
    authDomain: "smile-2168a.firebaseapp.com",
    projectId: "smile-2168a",
    storageBucket: "smile-2168a.appspot.com",
    messagingSenderId: "145456423023",
    appId: "1:145456423023:web:aa49558dfa7228e7276d9a",
    measurementId: "G-64QVC2LVQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let db = initializeApp(firebaseConfig)
// let storage = getStorage(db, 'gs://smilefoundation-93974.appspot.com/')
let storage = getStorage(db, 'gs://smile-2168a.appspot.com/')
const fstore = getFirestore(db);


export { db, storage, fstore }
