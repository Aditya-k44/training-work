import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import AuthOtp from './pages/AuthOtp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to={"/login"} />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/otpAuth' element={<AuthOtp />}/>
        <Route path= '/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
