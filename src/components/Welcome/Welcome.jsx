import React, { useState, useEffect } from "react";

function WelcomeMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setMessage("Good Morning!");
    } else if (hours < 18) {
      setMessage("Good Afternoon!");
    } else {
      setMessage("Good Evening!");
    }
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default WelcomeMessage;
