import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAO0fKnGhKHgvHNUW_NjSzUuanlPUBW9P0",
    authDomain: "catch-of-the-day-ark-6f7eb.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ark-6f7eb.firebaseio.com",
    projectId: "catch-of-the-day-ark-6f7eb",

  });

  const base = Rebase.createClass(firebaseApp.database());

  export { firebaseApp };

  export default base;