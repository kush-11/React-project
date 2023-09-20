import React, { useState  , useEffect} from 'react';
import styles from "./Login.module.css"

export const Signup = () => {
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

  const handleSignup = () => {
    // Validate the form data (e.g., check for empty fields)

    if (!formData.username || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Signup successful!');
  };

  return (
    <div className={`${styles.contact_form}`}>
    <form>
    
      <h2>Signup</h2>
    
      <div className={`${styles.formControl}`}>
      <label htmlFor="username">UserName</label>
      <input type="text" name="username" placeholder="Username" onChange={handleInputChange}/>
      </div>
    
      <div className={`${styles.formControl}`}>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
      <button onClick={handleSignup}>Signup</button>
      </div>
    
    </form>
    </div>
  );
};

// export default Signup;
