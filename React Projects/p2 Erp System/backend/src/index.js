import express from "express";
const app = express();
const port = process.env.PORT || 4000;

const jokes = [{
    id: 1,
    "title": "A Joke",
    "content" : "This is a joke"
},
{
    id: 2,
    "title": "Two Joke",
    "content" : "This is another joke"
},
{
    id: 3,
    "title": "Thirds",
    "content" : "This is 3 joke"
}

];


app.get("/", (req, res) =>{
    res.send("Hello , World");
})

app.get('/api/jokes', (req, res) =>{
   
    res.send(jokes);
})

console.log(jokes);
app.listen(port, () =>{
    console.log(`Server running on port ${port} `)
})