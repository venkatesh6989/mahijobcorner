import React, {useState,useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

function Jobs(){
const [jobsData,setJobsData] = useState(null)

return(
        <div className="p-5">
            <h1 style={{"fontSize": "20px"}}>Job Updates</h1>
               <div className="container">
                   <div className="row">
                   
                   {jobsData? (
                      jobsData.map(eachjob => (
                        <div className="col-s-12 col-lg-5 m-3 p-3" style={{"border": "2px solid #000000", "border-radius": "10px"}}>
                            <img src={eachjob.logoUrl} alt={eachjob.roleName} style={{"width": "30px", "height": "50px"}}/>
                            <h1>{eachjob.roleName}</h1>
                            <p>{eachjob.companyName}</p>
                            <p>{eachjob.location}</p>
                            <p>{eachjob.postedAt}</p>
                        </div>
                      ))) : (<p>loading...</p>)
                   }
                   </div>
               </div>
            </div>
        )
    }


export default Jobs