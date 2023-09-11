const express = require("express");
const path = require("path");
const {open} = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}))

const dbpath = path.join(__dirname,'JobCorner.db');

let db = null;
console.log("It's Running...");
const initializationDbAndServer = async() => {
    try{
        db = await open({
            filename: dbpath,
            driver: sqlite3.Database,
        });
    app.listen(5000, ()=>{
        console.log("Server Running at localhost:5000");
    });
    }catch(e){
        console.log(`Something Happend ${e}`);
    }
};

initializationDbAndServer();


//admin post form data
app.post('/formData', async(req,res) => {
    try{
        const jobDetails = req.body;
        const {jobId,logoUrl,roleName,companyName,location,postedAt} = jobDetails;
        const dataPostQuery = `INSERT INTO job_corner (job_id,logo_url,role_name,company_name,location,posted_at) VALUES (
        ${jobId}, '${logoUrl}','${roleName}','${companyName}','${location}','${postedAt}');`;
        const dbResponse = await db.run(dataPostQuery);
        const jobID = dbResponse.lastID;
        console.log(dbResponse.lastID)
        res.send("Job Posted SuccessFull")
    }catch(e){
        res.send(e.message)
        res.status(400)
    }
});

//admin delete job post
app.delete('/jobDelete/:id', async(req,res)=>{
    const {id} = req.params;
    const deleteQuery = `DELETE FROM job_corner WHERE job_id = ${id};`;
    const dbResponse = await db.get(deleteQuery);
    res.send("Job Removed");
    console.log(dbResponse)
});


app.get('/jobs', async(req,res)=> {
   const jobsQuery = `SELECT * FROM job_corner;`;
   const queryResult = await db.all(jobsQuery);
   res.send(queryResult);
   console.log(queryResult)
});

module.exports = app;

