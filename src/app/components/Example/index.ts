"use client"
// Example of how a request to the firebase endpoint will be 

import { useEffect, useState } from 'react'
const routesAvailable = {
  countdown_day: "countdown_day",
  event_count: "event_count"
}
const url = `https://freemerch-a8b7d-default-rtdb.firebaseio.com/${routesAvailable.event_count}.json`;

// Patch/Post example

//   const UpdatedData = {
//     count: 2, // this will be incremented
//   };

//   useEffect(() => {
//     fetch(url, {
//       method: "PATCH",
//       body: JSON.stringify(UpdatedData),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("FireBase Successfully Connected Success:", data))
//       .catch((error) => console.error("Error:", error));
//   }, []);

// fetch example 

function Testing() {
    const [RegCount, setRegCount] = useState(0);
    
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {console.log("FireBase Successfully Fetched Success:", data); setRegCount(data.count)})
        .catch((error) => console.error("Error:", error));
    }, []);
  return RegCount;
}

export default Testing



// if you want to fetch registered_users and display or map over it use this function
//  const [hmm, setHmmm] = useState<Record<string, User>>({});

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("FireBase Successfully Fetched Success:", data);
//         setHmmm(data);
//       })
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   console.log("this is HMM ", hmm);
//   console.log(typeof hmm);
  
//   // this would then be the jsx 
// {hmm &&
//         Object.entries(hmm).map(([key, value]: [string, User]) => (
//           <div className=" my-4 bg-red-500 font-semibold text-base">
//             <p>Key: {key}</p>
//             <p>Name: {value.name}</p>
//             <p>Email: {value.email}</p>
//             <p>Accomodation: {value.accomodation}</p>
//             <p>Socials: {value.socials}</p>
//           </div>
//         ))}

