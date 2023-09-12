import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function Header(){
    return(
        <nav className='h-25 d-flex flex-row justify-content-around align-items-center bg-info'>
            <h1 style={{"fontFamily":"Roboto","fontSize":"22px"}}>MahiJobCorner</h1>
             <div className='d-flex'>
                <Link to='/' className='link p-3' style={{"textDecorationLine": "none"}}>Home</Link><br/>
                <Link to='/jobs' className='p-3' style={{"textDecorationLine": "none"}}>Jobs</Link><br/>
             </div>
            <Link to='/admin-edit' className='btn btn-primary'>Admin Login</Link>
    </nav>
    )
}

export default Header