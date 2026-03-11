const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

async function connectDB() {
    await client.connect();
    db = client.db("lab7");
    console.log("MongoDB Connected");
}

connectDB();


// ADD NOTE
app.post("/notes", async (req, res) => {

    const note = {
        title: req.body.title,
        subject: req.body.subject,
        description: req.body.description,
        created_date: new Date()
    };

    const result = await db.collection("notes").insertOne(note);

    res.json(result);
});


// VIEW NOTES
app.get("/notes", async (req, res) => {

    const notes = await db.collection("notes").find().toArray();

    res.json(notes);
});


// UPDATE NOTE
app.put("/notes/:id", async (req, res) => {

    const id = req.params.id;

    await db.collection("notes").updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        }
    );

    res.send("Note Updated");
});


// DELETE NOTE
app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id;

    await db.collection("notes").deleteOne({
        _id: new ObjectId(id)
    });

    res.send("Note Deleted");
});

// SEARCH BOOK BY TITLE
app.get("/books/search", async (req,res)=>{

    const title = req.query.title;

    const books = await db.collection("books")
    .find({
        title: { $regex: title, $options: "i" }
    })
    .toArray();

    res.json(books);

});


// FILTER BOOK BY CATEGORY
app.get("/books/category/:category", async (req,res)=>{

    const category = req.params.category;

    const books = await db.collection("books")
    .find({ category: category })
    .toArray();

    res.json(books);

});


// SORT BOOKS BY PRICE
app.get("/books/sort/price", async (req,res)=>{

    const books = await db.collection("books")
    .find()
    .sort({ price: 1 })
    .toArray();

    res.json(books);

});


// SORT BOOKS BY RATING
app.get("/books/sort/rating", async (req,res)=>{

    const books = await db.collection("books")
    .find()
    .sort({ rating: -1 })
    .toArray();

    res.json(books);

});


// TOP RATED BOOKS
app.get("/books/top", async (req,res)=>{

    const books = await db.collection("books")
    .find({ rating: { $gte: 4 } })
    .limit(5)
    .toArray();

    res.json(books);

});


// PAGINATION
app.get("/books", async (req,res)=>{

    const page = parseInt(req.query.page) || 1;
    const limit = 5;

    const books = await db.collection("books")
    .find()
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();

    res.json(books);

});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});