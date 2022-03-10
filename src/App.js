import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dasboard from './dashboard';
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>

         <Route path='/' element={<Dasboard/>}></Route>
         
         

        </Routes>

      </BrowserRouter>
    
    </>
  );
}

export default App;
