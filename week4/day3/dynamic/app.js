const express = require("express");

const app = express();

app.use(express.static("public"));
// El servidor sabe gracias a esta configuracion donde estan las vistas que se pueden renderizar
app.set("views", `${__dirname}/views`);
// como va aprocesar los renders, con que motor
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const data = {
    name: "Kanye",
    user: 0,
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"],
    address: {
      street: "tu corah",
      number: 4,
    },
  };
  res.render("index", data);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server on: localhost:${PORT}`));
