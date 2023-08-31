
import './App.css'
import Login from "./Components/Login"
import Profile from './Components/Profile';
import { useState } from 'react'
import { LoginContext } from './Contexts/LoginContext';


function App() {
  const [showProfile , setShowProfile] = useState(false);
  const [username, setUsername] = useState();

  return (
    <div className='App'>
      <LoginContext.Provider value={ { username, setUsername, setShowProfile }}>
      { showProfile ? <Profile/> : <Login/>}
      </LoginContext.Provider>
      
    </div>
  )
}

export default App
