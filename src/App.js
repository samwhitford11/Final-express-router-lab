import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


function App() {
  const URL = "http://localhost:4111/";
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
