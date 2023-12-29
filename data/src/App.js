import './App.css'
import Navbar from './component/Navbar';
import Users from './component/Users';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/'element={<Navbar/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
    </>  
  );
}

export default App;
