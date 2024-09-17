import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollProgress from "./components/pagescroll/pagescroll";

function App() {
  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 0);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="App">
      <Home />
      <ScrollProgress />
    </div>
  );
}

export default App;
