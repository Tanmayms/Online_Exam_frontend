import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import {Routes,Route,} from 'react-router-dom';
import Home from './Home';
import ListStudent from './components/Student/ListStudent';
import ListStaff from './components/Staff/ListStaff';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}  ></Route>
        <Route exact path='/student-list' element={<ListStudent/>}  ></Route>
        <Route exact path='/staff-list' element={<ListStaff/>}  ></Route>
      </Routes>
    </div>
  );
}

export default App;
