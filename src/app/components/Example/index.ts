"use client"
// Example of how a request to the firebase endpoint will be 

import { useEffect } from 'react'
  const url = `https://freemerch-a8b7d-default-rtdb.firebaseio.com/event_count.json`;

  const UpdatedData = {
    count: 2, // this will be incremented
  };

  useEffect(() => {
    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(UpdatedData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log("Yeahh Success:", data))
      .catch((error) => console.error("Error:", error));
  }, []);