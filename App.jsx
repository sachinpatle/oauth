import react ,{useState,useEffect ,useContext} from 'react';
import TableComponent from './components/TableComponent'
import AboutUs from './components/AboutUs'
import { BrowserRouter as Router, Routes, Route ,useNavigate} from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Contact from './components/Contact'
import { LoginContext } from './Context/LoginContext';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import { PageLoader } from './components/PageLoader';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthenticationGuard } from './components/AuthenticationGuard';


const  App= ()=> {

  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <> 
      <PageLoader/>
      </>
       
    );
  }

  const Routing = ()=>{
    return(
      <Routes>
        <Route exact  path="/"  element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/admin" element={<h2>this is admin</h2>} /> 
        <Route exact path="/table"  element={< AuthenticationGuard component={TableComponent}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    )
  }

  return (
   <>
        <Navbar />
        <Routing />
   </>
  )
}

export default App