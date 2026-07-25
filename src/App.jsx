import { Routes,Route, useLocation} from "react-router-dom"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Services from "./component/Services"
import From from "./component/From"
import AdminLogin from "./component/AdminLogin"
import Dashboard from "./component/Dashboard"


function App() {
 const location = useLocation();

 const hideNavbar =
  location.pathname === "/admin" ||
  location.pathname === "/dashboard";


  return (
 <>
     {!hideNavbar && <Navbar />}
 <Routes>
<Route path="/" element={<Home/>} />
<Route path="/services" element={<Services/>} />
<Route path="/get-started" element={<From/>} />
<Route path="/admin" element={<AdminLogin/>} />
<Route path="/dashboard" element={<Dashboard/>}/>
 </Routes>
 </>
  )
}

export default App
