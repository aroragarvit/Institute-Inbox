import { firestore } from "../config/firebase";
import { useState, useEffect } from "react";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const usersCollection = firestore.collection("users");
      const query = usersCollection.where("isAvailable", "==", true);
      query.onSnapshot((snapshot) => {
        setUsers([]);
        let data = [];
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setUsers(data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading };
};
