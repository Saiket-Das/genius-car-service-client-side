// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnPw18mKqSgMI3jSWKHEUnnGYfYK0sowc",
  authDomain: "genius-car-services-1579f.firebaseapp.com",
  projectId: "genius-car-services-1579f",
  storageBucket: "genius-car-services-1579f.appspot.com",
  messagingSenderId: "634928066786",
  appId: "1:634928066786:web:8b93e682dc3aacb8ddaebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
