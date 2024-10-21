// Importamos nuestro framework expresss
const express = require("express");
const md5 = require("md5");

// Inicializamos express
const app = express();

// Definimos middleware
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

// Definimos constantes del sistema
const port = 8080;
const currentDir = __dirname;

// Definimos las rutas
app.get("/only-text", (req, res) => {
  res.send("Hello world!");
});

app.get("/", (req, res) => {
  res.sendFile(`${currentDir}/views/index.html`);
});

app.get("/render", (req, res) => {
  const mensaje = "Bienvenido John Smith";
  const variables = { mensaje };

  res.render(`${currentDir}/views/render.ejs`, variables);
});

app.get("/api", (req, res) => {
  const nombre = "Ares"; 
  const apellido = "Dominguez"; 
  // Extrae las 3 primeras letras
  const letras = nombre.substring(0, 3) + apellido.substring(0, 3); 
  //se genera el hash
  const hash = md5(letras); 
  res.send({ message: letras, hash: hash });
});

// Lanzamos el servidor
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
