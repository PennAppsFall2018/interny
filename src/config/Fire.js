
import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyD2oGGm7DGALdjrOQlGHRyr2A3E-v-M4cI",
  authDomain: "interny-41dc5.firebaseapp.com",
  databaseURL: "https://interny-41dc5.firebaseio.com",
  projectId: "interny-41dc5",
  storageBucket: "interny-41dc5.appspot.com",
  messagingSenderId: "135550171961"
};
const fire = firebase.initializeApp(config);
export default fire;
