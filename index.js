// import path
import express from "express";
import { format } from "date-fns";
import path from "path";
import fs from 'node:fs';

//declaration
const app=express();
const PORT=4000;

//middleware
app.use(express.json())

//route


app.get('/',(request,response)=>
{
    let dates=format(new Date(),'dd-MM-yyyy - HH-mm-ss')
    //console.log(dates);
    const paths=`TimeStamp/${dates}.txt`
    fs.writeFileSync(paths,`${dates}`,"utf8")
    response.status(200).send(`TimeStamp Created :${dates} `); 
   
})
app.get('/read',(request,response)=>
    {
        const folderPath = './TimeStamp';
       let result= fs.readdirSync(folderPath);
          
       /*  let dates=format(new Date(),'dd-MM-yyyy - HH-mm-ss')
        let folder=format(new Date(),'dd-MM-yyyy-HH-mm')
        const paths=`TimeStamp/${folder}.txt`
        let result=fs.readFileSync(paths,'utf8')*/

        response.status(200).send(result);  
    })

//runing
app.listen(PORT,()=>
{
    console.log(`App is listen port ${PORT}`);
})