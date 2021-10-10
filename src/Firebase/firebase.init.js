import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication

/* 
Step-1 Initial setup
1. firebase: create project
2. create web app
3. get configaration 
4. initialize firebase
5. enable auth method
-------------
Step-2:
1. Create Login component
2. Create Register component
3. Create route for login and register
-------------
Step-3:
1. Set up sign in method
2. Set up sign out method
3. user state
4. specialt observe
5. Return necessary methods and state from useFirebase
---------------
Step-4:
1. create a auth context
2. create context proviter
3. set context provider context value
4. use provider
5. create auth hook
--------------------
Step-5: private route
1. create private route
2. set private route
*/