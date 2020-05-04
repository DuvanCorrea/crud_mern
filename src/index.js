// this is the index of the server
const express = require("express");
const app = express();

/* setting */
app.set("port", process.env.PORT || 3000);
/* end setting */

/* middleware */

/* end middleware */

/* Routes */

/* end routes */

/* Static files */

/* end static files */

app.listen(app.get("port"), () => {
  console.log("server on port ", app.get("port"));
});
