import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



import './Login.css';

const Login = () => {
   const {singInUsingGoogle } = useAuth();

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
   return (
      <div className="container">

         <div className="login-form">
            <h2 className="text-primary pt-2 mb-3">Please Login</h2>
            <button className="btn badge rounded-pill bg-warning text-dark btn-style" onClick={singInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
         </div>

      </div>
   );
};
export default Login;