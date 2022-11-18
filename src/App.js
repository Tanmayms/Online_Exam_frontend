import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import {Routes,Route,} from 'react-router-dom';
import Home from './Home';
import ListStudent from './components/Student/ListStudent';
import AddStudent from './components/Student/AddStudent';
import ListStaff from './components/Staff/ListStaff';
import Navbar from './components/Navbar';
import UpdateStudent from './components/Student/UpdateStudent';
import UpdateStaff from './components/Staff/UpdateStaff';
import Registration from './components/Registration';

function App() {

  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}  ></Route>
        <Route exact path='student-register/' element={<Registration/>}  ></Route>
        <Route exact path='student-list/' element={<ListStudent/>}  ></Route>
        <Route exact path='student-list/student-update/:id' element={<UpdateStudent/>}  ></Route>
        <Route exact path='staff-list/' element={<ListStaff/>}  ></Route>
        <Route exact path='staff-list/staff-update/:id' element={<UpdateStaff/>}  ></Route>

      </Routes>
    </div>
  );
}

export default App;
