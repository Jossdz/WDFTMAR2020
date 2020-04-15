const mongoose = require("mongoose");

// (async () => {
//   await mongoose.connect("mongodb://localhost/xyz", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const Cat = mongoose.model("Cat", { name: String });

//   const kitty = new Cat({ name: "Misifus" });

//   const newCat = await kitty.save();
//   console.log(newCat);
// })().catch((err) => console.log(err));

mongoose
  .connect("mongodb://localhost/xyz", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Ready`))
  .catch((err) => console.error(err));

const Cat = mongoose.model("Cat", { name: String });

// C en Crud

// const kitty = new Cat({ name: "Misifus" });

// kitty
//   .save()
//   .then((newCat) => console.log(newCat))
//   .catch((err) => console.log(err));

// Cat.create({ name: "Felix" }).then((newCat) => console.log(newCat));

// R en cRud
// find con el objeto vacio devuelve todos los gatos
Cat.find({}).then((allCats) => console.log(allCats));
