import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1 style={{background:'black'}}>Welcome To Prapor Shop of Glorious Item</h1>
      
      {showLogin ?
        <>
          <h1>Login</h1>
          <LoginForm setUser={setUser} />
        </>
        :
        <>
          <h1>SignUp</h1>
          <SignUpForm setUser={setUser} />
        </>
      }
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
    </main>
  );
}