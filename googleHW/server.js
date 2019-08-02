const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
// const Book = require("./models/book")
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//       app.use(routes);
// }

// app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleBooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
app.get("/info", function(req, res){
  res.send("test works")
})

// Book.create({
//   title: "this is it"
// })
// .then(function(success){
//   console.log(success)
// })
// .catch(function(error){
//   console.log(error)
// })

app.listen(PORT, () =>
  console.log(` ==> API Server now LISTENING on PORT ${PORT}!`)
);
