const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("views", "views")
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.render("index", { title: "Home of furnitures" })
})




const port = process.env.PORT || 5000


app.listen(port, (err) => {
    if (err) throw err
    console.log("Now listening to port " + port)
})