import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var dailyItems = [];
var workItems = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/work", (req, res) => {
    res.render("work.ejs");
});

app.post("/submitDaily", (req, res) => {
    //const dailyArr = req.body.dailyItems.push(req.body.tb.value);
    const newItem = req.body.tb;
    dailyItems.push(newItem);
    console.log(dailyItems);
    res.render("index.ejs", {dailyItems : dailyItems});
    //res.render("index.ejs");
});

app.post("/submitWork", (req, res) => {
    const newWork = req.body.wtb;
    workItems.push(newWork);
    console.log(workItems);
    res.render("work.ejs", {workItems: workItems});
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});