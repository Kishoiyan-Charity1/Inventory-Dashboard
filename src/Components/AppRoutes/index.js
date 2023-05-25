import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";
import Customers from "../../Pages/Customers";
import Orders from "../../Pages/Orders";

function AppRoutes() {
    return (
       
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/inventory" element={<Inventory/>}></Route>
            <Route path="/customers" element={<Customers/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
        </Routes>

        
        
     
    )
}

export default AppRoutes;