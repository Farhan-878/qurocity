import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {isSmallScreen ? (
        <div className="coming-soon">
          <div className="container">
            <h1>
              Coming Soon its under the development{" "}
              <span>See in Big screen</span>
            </h1>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
