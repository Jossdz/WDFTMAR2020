const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function changeColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
}

const ball = {
  x: 50,
  y: 50,
  vx: -5,
  vy: 2,
  radius: 25,
  color: "#31DAFB",
  draw: function() {
    // ctx.beginPath();
    // ctx.arc(ball.x, this.y, this.radius, 0, Math.PI * 2, true);
    // ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fillText("DVD", this.x, this.y);
    ctx.font = "30px sans serif";
    ctx.fill();
  }
};

function update() {
  // 1. guardar el estado
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy *= -1;
    ball.color = changeColor();
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.color = changeColor();
    ball.vx *= -1;
  }
  // 2. limpiar canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 3. dibujar
  ball.draw();
  // 4. voilver a llamar
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
