import { useState } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import GetUserComponent from './components/GetUserComponent';


function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  const [ user, setUser ] = useState("")

  return (
    <div className="App">
      {isLoggedIn?(
        <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}/>
      ) : (
        <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
      )}
    </div>
  );
}

export default App;
