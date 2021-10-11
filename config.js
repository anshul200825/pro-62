import firebase from "firebase";
//in
const firebaseConfig = {
  apiKey: "AIzaSyDlQ6ClEN_UcNQ6oz8l66gjkegoSZuP_iA",
  authDomain: "school-attendance-fd2ef.firebaseapp.com",
  databaseURL: "https://school-attendance-fd2ef-default-rtdb.firebaseio.com",
  projectId: "school-attendance-fd2ef",
  storageBucket: "school-attendance-fd2ef.appspot.com",
  messagingSenderId: "203302980717",
  appId: "1:203302980717:web:47198c1976c40a6bd18364"
};
firebase.initializeApp(firebaseConfig)
  export default firebase.database()

 

  