"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NotificationPage() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(reg => console.log("Service Worker Registered!", reg))
        .catch(err => console.error("Service Worker Registration Failed", err));
    }
  }, []);
  
  

  const sendNotification = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support notifications.");
      return;
    }
  
    if (Notification.permission === "granted") {
      new Notification("Hello!", { body: "You clicked the button!" });
    } else if (Notification.permission === "default") {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        new Notification("Hello!", { body: "You clicked the button!" });
      }
    } else {
      alert("You have blocked notifications. Please enable them in browser settings.");
    }
  };
  

  return (
    <div className="notification-container">
      <div className="notification-box">
        {/* Top Text */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm mb-4"
        >
          Hola!
        </motion.h1>

        {/* Animated Bell Icon using Vector.svg */}
        <motion.div
          className="notification-bell"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.img
            src="/Vector.svg"
            alt="Notification Bell"
            width={100}
            height={100}
            className="text-purple-400"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl font-bold mt-6"
        >
          Lorem Ipsum...
        </motion.h2>

        {/* Subtitle */}
        <p className="text-gray-400 mt-2 text-sm">Lorem ipsum dolor sit amet.</p>

        {/* Animated Button */}
        <motion.button
          className="notification-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={sendNotification}
        >
          Send Notification
        </motion.button>
      </div>
    </div>
  );
}
