
import './App.css';
import {HashRouter,Routes,Route} from "react-router-dom";
import { Landingpage } from './components/Landingpage';
import NotFound from "./components/NotFound";
import { AutoHashRedirect } from './components/Autohashdirect';



function App() {
 



  return (
    
    <HashRouter>
     <AutoHashRedirect/>
     <Routes>   
    {/* POPRAWNA STRONA */}
        <Route path="/Portfolio_Milosz" element={<Landingpage />} />

        {/* ROOT = BŁĄD */}
        <Route path="/" element={<NotFound />} />

        {/* KAŻDY INNY ZŁY ADRES = BŁĄD */}
        <Route path="*" element={<NotFound />} /> 
    </Routes>
    </HashRouter>
    
  )
}
  
export default App;
