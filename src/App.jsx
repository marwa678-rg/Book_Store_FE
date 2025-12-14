import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import {Home} from"../pages/Home/Home"
import { Navbar } from "../components/Navbar/Navbar";
import{Login} from"../pages/login/Login"
import{Register}from"../pages/register/Register"
import { Container } from "react-bootstrap";
import { BookDetails } from "../pages/booKDetails/BookDetails";

const App = () => {
  return (
     <>
 <Toaster position="top-right"/>

     {/* Global Navbar */}
     <Navbar />
     
  {/* Routes */}
 <Container className="my-3 py-2">

      <Routes>
        <Route  path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register} />
        <Route  path='/bookDetails' Component={BookDetails}/>
      </Routes>


 </Container>
  
  
  </>
  );
}

export default App;