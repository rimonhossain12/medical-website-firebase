import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Login.css';

const Login = () => {
   const {singInUsingGoogle} = useFirebase();


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
      <div>

         <h2>Please Login</h2>
         <button onClick={singInUsingGoogle}>Google Sign In</button>
         <br />
         <Link to="/register">New User?</Link>

      </div>
   );
};
export default Login;