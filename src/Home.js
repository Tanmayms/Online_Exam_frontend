import './bootstrap.min.css';
import {Link} from 'react-router-dom';



function Home() {

  return (
    <div>
        <Link to="/student-list"><button type="button" className="btn btn-primary ">Student Info</button></Link>
        <Link to="/staff-list"><button type="button" className="btn btn-primary m-3">Staff Info</button></Link>
    </div>
  );
}

export default Home;