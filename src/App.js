import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/images/Slider';
import Login from './components/Login';
import Sign from './components/Sign';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
<BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={ <Slider/>}></Route>
      <Route path='/login' element={  <Login/>}></Route>
      <Route path="/signup" element={ <Sign/>}></Route>
    </Routes>

</BrowserRouter>
    
    </>
  );
}

export default App;
