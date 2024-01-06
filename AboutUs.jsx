import react ,{useState,useEffect ,useContext} from 'react';
import { LoginContext } from '../Context/LoginContext';
import { useAuth0 } from '@auth0/auth0-react';

function AboutUs() {
const {user,isAuthenticated} = useAuth0();

  return (
    <div>
      about us 
       {isAuthenticated &&
              <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            }
    </div>
  )
}

export default AboutUs