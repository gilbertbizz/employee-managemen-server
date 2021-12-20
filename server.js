const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello server");
});

const PORT = process.env.PORT || 7070;


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
