import { Route, Routes } from "react-router-dom"
import Login from "./login";    
import Home from "./home";


const Main = () => (
    <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
    </Routes>

)
    
export default Main;