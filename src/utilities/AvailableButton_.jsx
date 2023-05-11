import React from "react";
import { Button, Space } from "antd";
import { auth, firestore } from "../config/firebase.jsx";
import { useState } from "react";

const AvailableButton = () => {
  const [availability, setAvailability] = useState(false);
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
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error("No user is currently logged in.");
      }

      const usersRef = firestore.collection("users");
      const user = usersRef.doc(currentUser.uid);
      if (availability === false) {
        const needed = true;
        await user.update({
          isAvailable: needed,
        });
      } else if (availability === true) {
        const needed = false;
        await user.update({
          isAvailable: needed,
        });
      }

      setAvailability(!availability);

      if (!availability) {
        console.log("starting live location.");
        await startLiveLocation();
      } else console.log("stopping live location.");
    } catch (error) {
      console.error(error);
      throw new Error("Error while setting availability.");
    }
  };

  return (
    <div>
      <Button type="primary" onClick={handleAvailableClick}>
        Set Availability
      </Button>
    </div>
  );
};

export default AvailableButton;
