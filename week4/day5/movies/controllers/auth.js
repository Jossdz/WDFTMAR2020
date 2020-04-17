const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signupView = (req, res) => {
  res.render("auth/signup");
};

exports.signupProcess = async (req, res) => {
  // 1. obtener la niformacion del formulario
  const { email, password } = req.body;
  //2. verificar que recibi la informacion correcta (no me mandaron algo vacio kbrones)
  if (email === "" || password === "") {
    return res.render("auth/signup", {
      error: "No seas cabron, dame la info que te pedi",
    });
  }
  //3. Verificar si existe un usuario con ese correo
  const userInDB = await User.findOne({ email });

  if (userInDB !== null) {
    return res.render("auth/signup", {
      error:
        "ya te  registrastes wey, no te acuerdas ?... si no fuiste tu ya te jakiaron compa",
    });
  }
  //4. Hashear la contrasena
  //4.1 Generar el salt
  const salt = bcrypt.genSaltSync(12);
  const hashPass = bcrypt.hashSync(password, salt);

  //5. si existe devolver un error, si no creamos al usuario

  await User.create({
    email,
    password: hashPass,
  });
  // 6. responder al usuario
  res.redirect("/");
};

exports.loginView = (req, res) => {
  res.render("auth/login");
};

exports.loginProcess = async (req, res) => {
  // 1. Obtenemos la informacion que nos enviaron desde el cliente
  const { email, password } = req.body;
  //2. Verificar no tener campos vacios
  if (email === "" || password === "") {
    return res.render("auth/login", { error: "Te quieres morir ese?" });
  }
  //3. Buscamos el correo que nos enviaron en la base de datos, si no existe... error
  const userInDB = await User.findOne({ email });

  if (userInDB === null) {
    return res.render("auth/login", { error: "no te encontre we" });
  }
  //4.Si existe verificamos si la contraseña coincide, si es asi, MAGIIAA, si no error
  if (bcrypt.compareSync(password, userInDB.password)) {
    req.session.currentUser = userInDB;
    res.redirect("/profile");
  } else {
    res.render("auth/login", { error: "estas seguro que es tu cuenta bro?" });
  }
};

exports.logout = async (req, res) => {
  await req.session.destroy();
  res.redirect("/");
};
