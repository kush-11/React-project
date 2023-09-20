import  React  ,{ useState , useEffect} from "react";
import styles from "./Login.module.css"
import { Navigate, useNavigate } from "react-router-dom";
export const Login=()=>{
  const navigate=useNavigate();
    const [w,inc]=useState("40%");

    useEffect(() => {
        if( window.innerWidth<900)
       
            inc("300px")
        
      }, [])
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleLogin = (e) => {
        e.preventDefault();
        // Retrieve user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
    
        if (storedUser && storedUser.username === formData.username && storedUser.password === formData.password) {
          // navigate("/Calculator")
          alert("login successful")
        } else {
          alert("invalid password")
          // navigate("/Login");
        }
      };
    return(
        <div className={`${styles.contact_form}`}>
        
            <form>
            <h2>Login</h2>
           <div className={`${styles.formControl}`}>
            <label htmlFor="username">UserName</label>
            <input type="text" name="username" placeholder="Username" onChange={handleInputChange}/>
           </div>
           <div className={`${styles.formControl}`}>
            <label htmlFor="text">Password</label>
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
           <button onClick={handleLogin}>Login</button>
           </div>
        </form>
        </div>       
    )
}
