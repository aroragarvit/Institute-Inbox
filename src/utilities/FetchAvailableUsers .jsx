import { firestore } from "../config/firebase";
export const fetchUsers = async () => {
  try {
    const usersCollection = firestore.collection("users");
    const query = usersCollection.where("isAvailable", "==", true);
    let data = [];
    query.onSnapshot((querySnapshot) => {
      data.length = 0; // Clear the array before repopulating it
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        userData.id = doc.id;
        data.push(userData);
      });
    });
    console.log("DATA", data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
