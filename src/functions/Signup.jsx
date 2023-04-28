import { useEffect } from "react";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";

export const signup = (values) => {
  return auth
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);

      return user.sendEmailVerification().then(function () {
        console.log("Email sent");

        return new Promise((resolve, reject) => {
          useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged((user) => {
              if (user && user.emailVerified) {
                unsubscribe();
                resolve(user);
              }
            });

            setTimeout(() => {
              // NOt working properly
              unsubscribe();
              auth.signOut();
              reject(new Error("Please verify your email to sign up."));
            }, 5 * 60 * 1000);
          }, []);

          return user;
        });
      });
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
};
