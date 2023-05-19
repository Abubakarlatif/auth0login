
import './App.css';
import LoginButton from './Component/LoginButton';
import LogoutButton from './Component/LogoutButton';
import Profile from './Component/Profile';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const {isLoading}= useAuth0();
  if(isLoading){
    return(<div>loading..</div>)
  }
  return (
    <>
    <LoginButton/>
    <LogoutButton/>
    <Profile/>
    </>
  );
}

export default App;
