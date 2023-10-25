import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

const RegisterAndLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('register');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  };
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={(event) => handleSubmit(event)}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="block w-full rounded p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="Password"
          placeholder="Password"
          className="block w-full rounded p-2 mb-2 border"
        />
        <button className="bg-blue-500 text-white block w-full rounded p-1.5">
          {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === 'register' && (
            <div>
              Already a member? <button onClick={() => setIsLoginOrRegister('login')}>Login here</button>
            </div>
          )}
          {isLoginOrRegister === 'login' && (
            <div>
              Don`t have an account? <button onClick={() => setIsLoginOrRegister('register')}>Register</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterAndLogin;
