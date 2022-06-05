
import './App.css';
import Navbar from './Component/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './Pages/About';
import Blog from './Pages/Blog';
import Signup from './Pages/Form'
import Login from './Pages/Login';
import 'antd/dist/antd.css';
import Dash from './Pages/dash';
import Data from './Pages/Data';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/form' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/dash' element={<Dash />}></Route>
        <Route path='/data' element={<Data/>}></Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
