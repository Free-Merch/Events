import AboutEvent from "./components/AboutEvent";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Speak from "./components/Speak";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import PastEventsSlider from "./components/PastEventsSlider";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <AboutEvent />
      {/* <Sponsors /> */}
      <Speakers />
      <PastEventsSlider />
      <Speak />
      <Faq />
    </main>
  );
}
