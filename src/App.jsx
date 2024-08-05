import { DisplayAudioFile } from "./Components/DisplayAudio";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { useState } from "react";
function App() {
  const [file, setfile] = useState(null);
  return (
    <>
      <Header />

      {file ? (
        <DisplayAudioFile file={file} setfile={setfile} />
      ) : (
        <Home setfile={setfile} />
      )}
    </>
  );
}

export default App;
