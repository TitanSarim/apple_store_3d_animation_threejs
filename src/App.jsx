import "./App.css";

import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebhiViewer from "./components/WebhiViewer";

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebhiViewer />
    </div>
  );
}

export default App;
