if(process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

/* NPM Packager */
const express = require("express");
const bodyParser = require("body-parser");

/* Express */
const app = express();

/* App Configurations */
app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Express Routing */
// Router Definitions
const rootRouter = require("./routes/index");

// Root
app.use("/", rootRouter);

const _PORT = process.env.PORT;
app.listen(_PORT, () => console.log(_PORT));