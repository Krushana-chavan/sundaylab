import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './Components/PrivateRoutes';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element = {<PrivateRoutes><Home /></PrivateRoutes>}/>
        <Route path='/profile' element = {<PrivateRoutes><Profile /></PrivateRoutes>}/>
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='/login' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;
