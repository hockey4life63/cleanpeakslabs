const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const mainRoute = require("./controllers/main_controller");
const acctRouter = require("./controllers/acct_routes");
const db = require("./models");
const moment = require("moment");
moment().format();

const app = express();
const port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use("/public", express.static("public"));

app.use(methodOverride("_method"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/acct", acctRouter);
app.use("/", mainRoute);

db.sequelize.sync({force:true}).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
