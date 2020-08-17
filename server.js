const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.end("This is it")
})




const port = process.env.PORT || 5000


app.listen(port, (err) => {
    if (err) throw err
    console.log("Now listening to port " + port)
})