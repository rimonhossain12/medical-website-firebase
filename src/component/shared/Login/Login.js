import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Banner from '../Banner/Banner';

import './Login.css';

const Login = () => {
   const { googleSingIn } = useAuth();

   const location = useLocation();
   const history = useHistory();

   const loginWithGoogle = () => {
      googleSingIn(location,history);
   }

   return (
      <div>
         <Banner></Banner>
         <div className="container">

            <div className="login-form">
               <h2 className="text-primary pt-2 mb-3">Please Login</h2>
               <button className="btn badge rounded-pill bg-warning text-dark btn-style" onClick={loginWithGoogle}>Google Sign In</button>
               <br />
               {/* <Link to="/register">New User?</Link> */}
            </div>
         </div>
         {/* <Footer></Footer> */}
      </div>
   );
};
export default Login;