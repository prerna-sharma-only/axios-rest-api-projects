import express from "express";
import axios from "axios";

const app = express();

app.use(express.static('public'));

app.get("/",async (req,res)=>{
    try{
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const result = response.data;
        console.log(result);
        res.render("index.ejs",{
            secret : result.secret,
            user : result.username
        });
    }catch (error) {
        console.log(error.message);
        console.log(error.response?.data);
        res.status(500).send(error.message);
    }
});

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})