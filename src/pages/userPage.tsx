import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {
  const [user, setUser] = useState<{ name: string; password: string }[]>([]);
  const [nom, setNom] = useState('');
  const [contrasenya, setPassword] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('Users');
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);  

  const login = () => {
    const name = document.getElementById('loginName') as HTMLInputElement;
    const password = document.getElementById('loginPassword') as HTMLInputElement;
    setNom(name.value);
    setPassword(password.value);

    const loggedInUser = user.find(
      (person) => person.name === nom && person.password === password.value
    );

    if (loggedInUser) {
      alert('Login Successful');
      history('/mainPage');
    } else {
      alert('Login Unsuccessful');
    }
  };

  const register = () => {
    const name = document.getElementById('registerName') as HTMLInputElement;
    const password = document.getElementById('registerPassword') as HTMLInputElement;
    setNom(name.value);
    setPassword(password.value);
    const newUser = {
      name: nom,
      password: contrasenya,
    };
    const updatedUsers = [...user, newUser];
    
    setUser(updatedUsers);

    localStorage.setItem('Users', JSON.stringify(updatedUsers));

    console.log(updatedUsers);
  };

  return (
    <>
      <div className="mainReg">
        <div className="login">
          <h1>Login</h1>
          <br />
          <h3>Name</h3>
          <br />
          <input type="text" className="inputName" id="loginName" />
          <br />
          <h3>Password</h3>
          <br />
          <input type="text" className="inputRegister" id="loginPassword" />
          <br />
          <button onClick={login}>Login</button>
        </div>
        <div className="register">
          <h1>Register</h1>
          <br />
          <h3>Name</h3>
          <br />
          <input type="text" className="inputName" id="registerName" />
          <br />
          <h3>Password</h3>
          <br />
          <input type="text" className="inputName" id="registerPassword" />
          <br />
          <button onClick={register}>Register</button>
        </div>
      </div>
    </>
  );
};
