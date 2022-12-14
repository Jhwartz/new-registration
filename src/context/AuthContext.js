import React from 'react'
import {createContext,useState} from 'react'

const authContext = createContext();
AuthProvider= authContext.Provider;

function AuthContext({children}) {
    const [success, setSuccess] =useState('false');
    const [error, setError] =useState('null');
    const [loading, setLoading] =useState('false');
    const [user, setUser]=useState('null');

    //login function
   /* const authLogin = async (email, password) => {
      setLoading(true);
      await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
          },
        body: JSON.stringnify({
          email,
          password,

        }),
      })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      });
      setLoading(false);
    };
        }*/
    
    //signup function
    const authRegister = async (username, email, password) => {
      setLoading(true);
      await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content Type": "application/json"
        },
        body: JSON.stringnify({
          username,
          email,
          password,

        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
      setLoading(false);
    };

    //signout

  return (
    <div>AuthContext</div>
  )
}


export default AuthContext