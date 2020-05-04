// this is the index of the server
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

/* setting */
app.set("port", process.env.PORT || 3000);
/* end setting */

/* middleware */
app.use(morgan("dev"));
app.use(express.json());
/* end middleware */

/* Routes */
app.use(require("./routes/task.routes.js"));
/* end routes */

/* Static files */
app.use(express.static(path.join(__dirname, "/public")));
/* end static files */

app.listen(app.get("port"), () => {
  console.log("server on port ", app.get("port"));
});
