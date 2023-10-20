// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDvud3ZxV7yz9OKWT3B9j_XpsxfqZ_Vco4",
//   authDomain: "drawing-school-39fb7.firebaseapp.com",
//   projectId: "drawing-school-39fb7",
//   storageBucket: "drawing-school-39fb7.appspot.com",
//   messagingSenderId: "574437702308",
//   appId: "1:574437702308:web:ea5af4f5167f48db850431"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);