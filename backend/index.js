const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
app.use(cors());
const router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let recipe = require("./model");
let user = require("./users");

mongoose.connect("mongodb://127.0.0.1:27017/local", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use("/", router);

router.route("/getData").get(function(req, res) {
  recipe.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
router.route("/getMyRecipes").get(function(req, res) {
  const id = req.params.author;
  recipe.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
      console.log(id);
    }
  });
});
app.post('/addRecipe', (req, res) => {
    var myData = new recipe(req.body);
    myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
router.route("/login").get(function(req, res) {
  user.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});