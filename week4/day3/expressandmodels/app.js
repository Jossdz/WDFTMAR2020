const express = require("express");
const mongoose = require("mongoose");
const Weapon = require("./models/Weapon");

const app = express();
mongoose
  .connect("mongodb://localhost/covidweapons", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Ready 🚀"))
  .catch((err) => console.error(err));

app.use(express.static("public"));
app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");

app.get(
  "/",
  /*controller*/ async (req, res) => {
    //   const weapon = {
    //     name: "Machete",
    //     owner: "Vidal",
    //     scope: "MELEE",
    //     isDangerous: true,
    //     color: "brown",
    //   };
    //   const vidalWeapon = new Weapon(weapon);
    //   await vidalWeapon.save();
    //   await Weapon.create({
    //     name: "Sword",
    //     owner: "Donovan",
    //     scope: "MELEE",
    //     isDangerous: true,
    //     color: "brown",
    //   });
    const weapons = await /*Model*/ Weapon.find();
    /* View */
    res.render("index", { weapons });
  }
);

// U en crUd
app.get("/update", async (req, res) => {
  await Weapon.updateOne(
    { owner: "Donovan" },
    { name: "un lysol", isDangerous: false }
  );

  await Weapon.findByIdAndUpdate("5e97891371ac6113857522bf", {
    name: "un pnshi machete",
  });

  const weapons = await Weapon.find();
  res.render("index", { weapons });
});

// D en cruD

app.get("/delete", async (req, res) => {
  //await Weapon.deleteOne({ owner: "Donovan" });
  await Weapon.findByIdAndRemove("5e97891371ac6113857522bf");
  const weapons = await Weapon.find();
  res.render("index", { weapons });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
