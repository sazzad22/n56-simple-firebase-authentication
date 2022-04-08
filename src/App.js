import app from "./firebase.innit";
import "./App.css";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import TT from "./Component/TT/TT";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);//const auth = getAuth(app) ফাঙ্কশন এর বাহিরে রাখা হয় accessibility এর জন্য
//getAuth() মেথড কল করা হয় firebase এর authentication লাইব্রেরি কে ব্যাবহার করার জন্য

function App() {
  //declaring a state to show the user data if the login was success full
  
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider(); //this one gives the pop up for google sign in

  //provider for github
  const githubProvider = new GithubAuthProvider();

  //google sign in handler
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider) //ekhane promise hocche or api call er moto hocche
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user); //setting the state with the user info acquired
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //sign out handler
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  //github sign in hadler
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="App">
      <h2>Name:{user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
      <br />
      {/* The below part is using ternary oprator. er case e : sign er age and pre only ekta jinish add kora jabe. Multiple jinish add korte hole ta koyek vabe kora jay. <div> use kore kora jay. Fragment use koreo kora jay ,jeta ei khetre use kora hocche */}
      {user.email ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      )}

      <TT></TT>
    </div>
  );
}

export default App;
