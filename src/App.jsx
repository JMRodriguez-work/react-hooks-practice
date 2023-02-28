import { useEffect, useState } from "react";
import "./App.css";
import { Header, Characters } from "./components/index";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if(darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [darkMode])


  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Characters />
    </div>
  );
}

export default App;
