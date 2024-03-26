import AboutEvent from "./components/AboutEvent";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Speak from "./components/Speak";
import Speakers from "./components/Speakers";
// import Sponsors from "./components/Sponsors";
import PastEventsSlider from "./components/PastEventsSlider";
// import { useEffect, useState } from "react";
// import { parse } from "json2csv";

export default function Home() {
  // const url = `https://freemerch-a8b7d-default-rtdb.firebaseio.com/registered_users.json`;

  // const [hmm, setHmmm] = useState({});

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("FireBase Successfully Fetched Success:", data);
  //       setHmmm(data);

  //       // // Convert data to CSV format
  //       // const csv = parse(Object.values(data));

  //       // start from 360... when slicing like you have to offset of -2 from your original start value, use -3 to start from the last one
  //       const values = Object.values(data).slice(737);
  //       const csv = parse(values);

  //       // Download the CSV file
  //       downloadCSV(csv, "registered_users.csv");
  //     })
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  return (
    <main className="min-h-screen ">
      <Header />
      <AboutEvent />
      <Speakers />
      <PastEventsSlider />
      <Speak />
      <Faq />
    </main>
  );
}

// const downloadCSV = (csv, filename) => {
//   const csvFile = new Blob([csv], { type: "text/csv" });
//   const a = document.createElement("a");
//   a.href = URL.createObjectURL(csvFile);
//   a.download = filename;
//   a.click();
// };
