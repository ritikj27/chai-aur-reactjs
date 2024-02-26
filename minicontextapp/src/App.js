import logo from './logo.svg';
import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <div className='App'>
        <h1>hello world</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  );
}

export default App;
