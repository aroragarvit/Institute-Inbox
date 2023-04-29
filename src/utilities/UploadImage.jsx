import { storage } from "../config/firebase";

export const uploadImage = async (file, uid) => {
  try {
    const storageRef = storage.ref();
    const imageFolderRef = storageRef.child("images");

    const uidRef = imageFolderRef.child(uid);
    const imageRef = uidRef.child(file);

    await imageRef.put(file);
    const url = await imageRef.getDownloadURL();
    return url;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
