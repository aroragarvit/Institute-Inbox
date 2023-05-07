import React from "react";
import { auth, firestore } from "../config/firebase.jsx";

const AvailableButton = () => {
  const startLiveLocation = async () => {
    try {
      console.log("Starting live location.");
      // First, request permission to access the user's location
      const permissionStatus = await navigator.permissions.query({
        name: "geolocation",
      });
      console.log(permissionStatus);
      if (permissionStatus.state !== "granted") {
        throw new Error("Location permission not granted.");
      }

      // Permission is granted, so start tracking the location
      navigator.geolocation.watchPosition(
        async (position) => {
          const currentUser = auth.currentUser;
          if (!currentUser) {
            throw new Error("No user is currently logged in.");
          }

          const usersRef = firestore.collection("users");
          const user = usersRef.doc(currentUser.uid);
          await user.update({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
          throw new Error("Error while tracking location.");
        }
      );
    } catch (error) {
      console.error(error);
      throw new Error("Error while starting live location.");
    }
  };

  const handleAvailableClick = async () => {
    try {
      await startLiveLocation();
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error("No user is currently logged in.");
      }

      const usersRef = firestore.collection("users");
      const user = usersRef.doc(currentUser.uid);

      await user.update({
        isAvailable: true,
      });

      console.log("Availability updated to true.");
    } catch (error) {
      console.error(error);
      throw new Error("Error while setting availability.");
    }
  };

  return (
    <div>
      <button onClick={handleAvailableClick}>Set Availability</button>
    </div>
  );
};

export default AvailableButton;
