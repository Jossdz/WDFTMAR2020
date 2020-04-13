const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  switch (request.url) {
    case "/donovan":
      response.write("Hola Donovan");
      response.end();
      break;
    case "/emma":
      response.write("Hola emma");
      response.end();
      break;
    case "/vidal":
      response.write("Hola vidal");
      response.end();
      break;
    case "/diego":
      response.write("Hola diego");
      response.end();
      break;

    default:
      response.write("404 ke kiere o ke");
      response.end();
      break;
  }
});

// el server esta disponible en el puerto 3000
server.listen(3000);
