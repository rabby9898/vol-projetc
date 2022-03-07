const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()


const app = express()
app.use(bodyParser.json());
app.use(cors());
const port = 3300;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vxwfj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const registered = client.db("volunteerReg").collection("registered");

    // sending/posting data to database
  app.post('/register',(req,res)=>{
    const pd=req.body;
    console.log(pd);
    collection.insertOne(pd)
    .then(result=>{
      res.send(true);
       
    })
  })


  // perform actions on the collection object
  client.close();
  console.log('database connected')
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port);