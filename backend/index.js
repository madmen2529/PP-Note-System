const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const db = require("./models");

const userService = require("./services/user");
const noteService = require("./services/note");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: false }).then(() => {
  // userService(app, db);
  noteService(app, db);

  app.listen(8080, () => {
    console.log("Server is running on port 8080");
  });
});
