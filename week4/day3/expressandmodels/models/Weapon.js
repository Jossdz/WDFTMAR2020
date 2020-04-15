const { Schema, model } = require("mongoose");

// Definimos el esquema que es como se constituyen las propiedades de nuestros documentos
const weaponSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  owner: String,
  scope: {
    type: String,
    enum: ["RANGE", "MELEE"],
  },
  color: String,
  isDangerous: {
    type: Boolean,
    default: false,
  },
});
// creamos el modelo para que el odm genere la coneccion a la coleccion weapons

// esportamos el modelo para usarlo en otros archivos
module.exports = model("Weapon", weaponSchema);
