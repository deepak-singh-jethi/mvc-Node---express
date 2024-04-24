const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");

// import routes from admin.js and shop.js
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// to serve static files such as images, CSS files, and JavaScript files
app.use(express.static(path.join(__dirname, "public")));

//imported routes from admin.js and shop.js
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// showing error page
app.use(errorController.get404);

// listening to port 3000
app.listen(3000);
