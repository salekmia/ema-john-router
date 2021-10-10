import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication

/* 
Initial setup
1. firebase: create project
2. create web app
3. get configaration 
4. initialize firebase
5. enable auth method
*/