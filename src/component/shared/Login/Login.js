import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Banner from '../Banner/Banner';
import { useHistory, useLocation } from 'react-router';

import './Login.css';

const Login = () => {
   const { singInUsingGoogle } = useAuth();

   /*  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleEmailChange = (e) => {
       setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
       setPassword(e.target.value);
    }
 
 
    const handleRegistration = (e) => {
       console.log(email, password); 
    }
  */
   /*  .then((result) => {
                   const user = result.user;
                   setUser(user);
   
               })
               .catch((error) => {
   
                   const errorMessage = error.message;
                   setError(errorMessage);
   
               }) */
   const location = useLocation();
   const history = useHistory();
   const redirect_uri = location?.state?.from || "/home";


   const loginwithGoogle = () => {
      singInUsingGoogle()
         .then(result => {
            history.push(redirect_uri);
         })
   }

   return (
      <div>
         <Banner></Banner>
         <div className="container">

            <div className="login-form">
               <h2 className="text-primary pt-2 mb-3">Please Login</h2>
               <button className="btn badge rounded-pill bg-warning text-dark btn-style" onClick={loginwithGoogle}>Google Sign In</button>
               <br />
               <Link to="/register">New User?</Link>
            </div>
         </div>
         {/* <Footer></Footer> */}
      </div>
   );
};
export default Login;