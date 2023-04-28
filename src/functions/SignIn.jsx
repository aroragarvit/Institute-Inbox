import { auth } from "../config/firebase.jsx";

export const login = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("usercredential", userCredential);
      const user = userCredential.user;
      console.log(user);
      if (user.emailVerified) {
        console.log("Email verified. User can log in.");
      } else {
        console.log("Email not verified. User cannot log in.");
        user
          .sendEmailVerification()
          .then(function () {
            // Email sent.
            console.log("Email sent");
          })
          .then(
            auth.signOut().then(() => {
              console.log("User signed out");
            })
          );

        alert(
          "Please verify your email before logging in using new Email sent and try logging again."
        );
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
