import "./css/App.css";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";


function App() {
 
  return (
    <MovieProvider>
      <NavBar />      
      <main className='main_content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
      </MovieProvider>
   

  
  );
}

export default App;