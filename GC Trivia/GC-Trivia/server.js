//code required to use Express with Angular
const cors = require("cors");
app.use(cors());
app.use(express.static(__dirname + "/public"));

//creates server
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`));

