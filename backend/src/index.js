const path = require("path");
const express = require('express');
const app = express();
const morgan = require("morgan");
const methodOverride = require("method-override");

const route = require("./routes");



// config file static

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  
  // custom method
  app.use(methodOverride("_method"));
  
  // HTTP logger
  app.use(morgan("combined"));

  var port =8000;
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);