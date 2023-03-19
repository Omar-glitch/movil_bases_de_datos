import { useState, useEffect } from 'react';
import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';
import EventEmitter from '../utils/EventEmitter';
import axios from 'axios';
import urls from '../constants/urls';

const { SERVER_URL } = urls;

const useAuthentication = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const handleLogIn = (name, password) => {
      axios.get(`${SERVER_URL}/app/${name}`)
        .then(data => {
          Promise.all([setItemAsync('name', name), setItemAsync('pwd', password)])
            .then(console.log)
            .catch(() => {})
          setUser(data.data.data)
        })
        .catch(() => console.log('Este usuario no existe'))
    }

    const handleSignUp = (name, password) => {
      console.log({ name, password })
    }

    const handleLogOut = () => {
      Promise.all([deleteItemAsync('name'), deleteItemAsync('pwd')])
        .then(console.log)
        .catch(() => {})
      setUser(null)
    };

    Promise.all([getItemAsync('name'), getItemAsync('pwd')])
      .then(values => {
        console.log(SERVER_URL)
        axios.get(`${SERVER_URL}/app/${values[0]}`)
          .then(data => setUser(data.data.data))
          .catch(() => setUser(null))
      })
      .catch(() => setUser(null))

    EventEmitter.addListener('login', handleLogIn);
    EventEmitter.addListener('signin', handleSignUp);
    EventEmitter.addListener('logout', handleLogOut);
    
    return () => {
      EventEmitter.removeListener('login', handleLogIn);
      EventEmitter.removeListener('signin', handleSignUp);
      EventEmitter.removeListener('logout', handleLogOut);
    }
  }, [])

  return { user }
}

export default useAuthentication;