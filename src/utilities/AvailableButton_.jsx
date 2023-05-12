import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { auth, firestore } from "../config/firebase.jsx";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const AvailableButton = () => {
  const currentUser = auth.currentUser;
  const usersRef = firestore.collection("users");
  const userDoc = usersRef.doc(currentUser.uid);
  const { user, setUser } = useContext(AuthContext);
  const [locationTracker, setLocationTracker] = useState(null);

  useEffect(() => {
    const startOrStopLiveLocation = async () => {
      if (user.isAvailable) {
        await startLiveLocation();
      } else {
        await stopLiveLocation();
      }
    };
    startOrStopLiveLocation();
  }, [user.isAvailable]);

  const startLiveLocation = async () => {
    try {
      console.log("Starting live location.");
      const permissionStatus = await navigator.permissions.query({
        name: "geolocation",
      });
      console.log(permissionStatus);
      if (permissionStatus.state !== "granted") {
        alert("Please allow location access to enable tracking.");
        throw new Error("Location permission not granted.");
      }
      const tracker = navigator.geolocation.watchPosition(
        async (position) => {
          console.log("continuous monitoring");
          if (!currentUser) {
            throw new Error("No user is currently logged in.");
          }
          await userDoc.update({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
          throw new Error("Error while tracking location.");
        }
      );
      setLocationTracker(tracker);
    } catch (error) {
      console.error(error);
      throw new Error("Error while starting live location.");
    }
  };

  const stopLiveLocation = async () => {
    try {
      console.log("Stopping live location.");

      await userDoc.update({
        latitude: 0,
        longitude: 0,
      });

      if (locationTracker) {
        navigator.geolocation.clearWatch(locationTracker);
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error while stopping live location.");
    }
  };

  const handleAvailableClick = async () => {
    try {
      if (!currentUser) {
        throw new Error("No user is currently logged in.");
      }
      const needed = !user.isAvailable;
      await userDoc.update({
        isAvailable: needed,
      });
      setUser({
        ...user,
        isAvailable: needed,
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error while setting availability.");
    }
  };

  return (
    <div>
      <Button type="primary" onClick={handleAvailableClick}>
        {user.isAvailable ? "Disable Availability" : "Start Availability"}
      </Button>
    </div>
  );
};

export default AvailableButton;
