const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {
  MongoClient,
  ServerApiVersion
} = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

// mongoBD

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nss4adm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)    
    await client.connect();

    // database collection
    const paintingAndDrawingCollection = client.db('paintingAndDrawingDB').collection("paintingsanddrawings")
    const categoryCollection = client.db("categoryDB").collection("categories")

    // category get
    app.get('/category', async (req, res) => {
      const cursor = categoryCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    // item get form database
    app.get('/paintings-and-drawings', async (req, res) => {
      const cursor = paintingAndDrawingCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    // item store in database
    app.post('/paintings-and-drawings', async (req, res) => {
      const paintingAndDrawingItem = req.body;
      // console.log(paintingAndDrawingItem);
      const result = await paintingAndDrawingCollection.insertOne(paintingAndDrawingItem);
      res.send(result);
    })

    // category store
    app.post('/category', async (req, res) => {
      const categoryItem = req.body;
      // console.log(categoryItem);
      const result = await categoryCollection.insertOne(categoryItem);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({
      ping: 1
    });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// server

app.get('/', (req, res) => {
  res.send('Painting and Drawing server is running')
})

app.listen(port, () => {
  console.log(`Painting and Drawing server is running on ${port}`);
})