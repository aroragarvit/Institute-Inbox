import { auth } from "../config/firebase";

export const signup = async (values) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );
    var user = userCredential.user;
    await user.sendEmailVerification();
    alert("Email sent");
    return await new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user_1) => {
        if (user_1 && user_1.emailVerified) {
          alert("Email Verified");
          resolve(user_1);
        }
      });
      setTimeout(async () => {
        await user.delete();
        await auth.signOut();
        reject(new Error("Please verify your email to sign up."));
      }, 5 * 60 * 1000);
      return user;
    });
  } catch (error) {
    console.log(error.code, error.message);
  }
};
