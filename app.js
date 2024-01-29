const express = require('express')
const path = require('path');

const app = express();
const port = 8080;


app.use((req, res, next) => {
    console.log("Middleware Active");
    next();
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, './contact-me.html'));
})



app.listen(port, () => {
    console.log(`App listening on port ${port}: http://localhost:${port}`);
})


