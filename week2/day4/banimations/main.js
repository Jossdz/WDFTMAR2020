//1. guardar el estado
// Vamos a guardar los cambios que sucedan en los elementos de nuestro programama
//2. Limpiar el canvas
//Pendiente...
//3. Dibujar los elementos animados
//4. volvemos a cambiar el estado
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, 150, 150);

// let x = 0;

// function updateCanvas() {
//   //  color.red   = (color.red+1) % 255
//   // color.green = (color.green+1) % 255
//   // guardamos el estado
//   x++;
//   // limpiamos canvas
//   ctx.clearRect(0, 0, 720, 480);
//   // dibujamos los elementos
//   ctx.fillRect(x, 0, 150, 150);

//   //   window.requestAnimationFrame(updateCanvas);
//   //   setTimeout(updateCanvas, 60 / 1000);
// }

// // setTimeout(updateCanvas, 60 / 1000);
// // window.requestAnimationFrame(updateCanvas);

// setInterval(updateCanvas, 60 / 1000);

// let c1 = 1;
// let c2 = 2;
// let c3 = 3;

// let counter = 1;

// console.log(canvas.width, canvas.height);

// function update() {
//   //1. guardamos el estado
//   c1 += 1;
//   c2 += 2;
//   c3 += 3;
//   // 2. limpiamos el canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // 3. pintando
//   ctx.fillRect(20, c1, 50, 50);
//   ctx.fillRect(150, c2, 50, 50);
//   ctx.fillRect(300, c3, 50, 50);
//   // solcitar el siguiente cambio
//   requestAnimationFrame(update);
// }

// requestAnimationFrame(update);

class Fantasmon {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  moveUp() {
    this.y -= 10;
  }
  moveDown() {
    this.y += 10;
  }
  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 10;
  }
}

const ghost = new Fantasmon();

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      ghost.moveUp();
      break;
    case 40:
      ghost.moveDown();
      break;
    case 37:
      ghost.moveLeft();
      break;
    case 39:
      ghost.moveRight();
      break;
  }
};

var img = new Image();
img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";

var bg = new Image();
bg.src =
  "https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png";

function draw(ghost) {
  ctx.drawImage(img, ghost.x, ghost.y, 50, 50);
}

var backgroundImage = {
  img: bg,
  x: 0,
  speed: -1,

  draw: function() {
    this.x--;
    // cuando la imagen se salga del canvas
    if (this.x < -canvas.width) {
      this.x = 0;
    }
    ctx.drawImage(this.img, this.x, 0, canvas.width, canvas.height);
    ctx.drawImage(
      this.img,
      this.x + canvas.width,
      0,
      canvas.width,
      canvas.height
    );
  }
};

function updateCanvas() {
  // 1. Guardar el estado
  // 2. Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 3. Dibujar los elementos
  draw(ghost);
  backgroundImage.draw();
  // 4. solicitar el siguiente cambio...
}

setInterval(updateCanvas, 60 / 1000);
