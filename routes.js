import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faq from './pages/FAQ';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/FAQ" element={<Faq />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;