//todo firebase(56-2)
/* 
/**
 * Steps to use firebase
 * 1. Create a project on console.firebase.google.com
 * 2. npm install firebase 
 * 3. Register Web app in firebase
 * 4. copy firebase init with config from firebase project settings into a file firebase.init.js
 * 5. export default app from firebase.init.js
 * 6. import getAuth from firebase/auth and create const auth = getAuth(app) in App.js
 * 7. import app firebase init.js into your app.js
 * 8. turn on google authentication (firebase >authentication> enable google sign in)
 * 9. create google provider
 * 10. use signInWithPopup and pass auth and provider
 * 11. handle .then (if successful) and catch error (if error) 
 */
// todo enable github provider
/* 
firebase - add github - go to github- settings -developer settings- add new app - provide url - callback url from firebase - webhook -app name - description etc - register - github will give you a client id - client secret -  add these client id and client secret  to your fire base provider page and you have added github as a provider authenticator for your app.
- Now  implementation - go to firebase docs - follow along with the sign in flow

//? fire base config
Firebase Remote Config is a cloud service that lets you change the behavior and appearance of your app without requiring users to download an app update. When using Remote Config, you create in-app default values that control the behavior and appearance of your app.
*/
