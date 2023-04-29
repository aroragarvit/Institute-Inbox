import { auth, firestore, storage } from "../config/firebase";
import { uploadImage } from "../utilities/UploadImage";
export const signup = async (values) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );
    const user = userCredential.user;
    console.log(user);

    // Send email verification request
    await user.sendEmailVerification();
    console.log("Email sent");

    // wait for 30 seconds for the user to verify their email
    let i = 0;
    while (!user.emailVerified && i < 30) {
      // 300 seconds = 5 minutes
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
      i++;
      await user.reload(); // Reload the user object to update the emailVerified property
    }

    if (!user.emailVerified) {
      // If the user's email is still not verified after 5 minutes, delete the user and throw an error
      await user.delete();
      throw new Error("Please verify your email to sign up.");
    }

    const url = await uploadImage(values.image, user.uid);

    // Update the user's profile
    await user.updateProfile({
      displayName: values.name,
      email: values.email,
      photoURL: url,
    });

    // Create a new document in the users collection with the uid of the user
    const usersCollection = firestore.collection("users");
    await usersCollection.doc(user.uid).set({
      email: user.email,
      name: values.name,
      photoURL: url,
      phoneNumber: values.phone,
      uid: user.uid,
      hostel: values.Hostel,
      block: values.Block,
      gender: values.gender,
    });

    return user;
  } catch (error) {
    console.log(error.code, error.message);
    throw error; // re-throwing the error to handle it in the calling function
  }
};
