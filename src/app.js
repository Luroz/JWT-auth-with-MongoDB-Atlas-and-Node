const express = require('express')
const userRouter = require('./routers/user')
//const bodyParser = require("body-parser")
const cors = require("cors");
//const url = require("url");
const port = process.env.PORT
require('./db/db')

const app = express()

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.use((req, res) => {
    res.status(404).json({ message: "Direccion Inexistente." });
});