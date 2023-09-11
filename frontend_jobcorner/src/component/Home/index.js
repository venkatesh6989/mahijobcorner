import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function Home(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100" style={{"backgroundImage": "url(https://img.freepik.com/premium-photo/smiley-woman-work-medium-shot_23-2149300667.jpg?w=996)",
          "minHeight":"90vh", "backgroundSize":"cover"}}>
            <h1>Welcome to Mahi job Corner</h1>
        
                <Link to='/jobs' className='btn btn-primary'>
                    Jobs
                </Link>
            
        </div>
    )
}

export default Home