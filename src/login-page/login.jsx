import '../styling/login-page/login.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication logic
    if (email === 'dinu@gmail.com' && password === 'dinu@123') {
      localStorage.setItem('auth', 'true'); // store auth flag
      alert('Login successful');
      navigate('/'); // redirect to home page
    } else {
      alert('Invalid details');
    }
  }

  return (
    <div class="form-container">
    <div class="form-box">
        <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>

    </div>
  )
}

export default LoginPage;
