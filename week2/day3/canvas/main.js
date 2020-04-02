// sujetamos nuestro canvas, nuestro lienzo
const canvas = document.querySelector('canvas')
// nuestro pincel
const ctx = canvas.getContext('2d')

// dibujar cuadrados o rectangulos
// ctx.fillRect(x, y, w, h)
// ctx.strokeRect(x, y, w, h)

// podemos cambiar el color de nuestro pincel
ctx.fillStyle = '#6a0dad'
ctx.strokeStyle = '#0076A8'

// fill -> rellena la figura
ctx.fillRect(10, 10, 100, 100)
// stroke -> no rellena, solo es una linea
ctx.strokeRect(110, 110, 100, 100)

// podemos incluso escribir en canvas y cambiar el estilo de nuesta fuente
// ctx.fillText(text, x, y)
// ctx.strokeText(text, x, y)

ctx.font = '32px Helvetica Nueu'
ctx.fillText('Call me', 150, 50)
ctx.strokeText('Bob Ross', 140, 80)

// circulos
// ctx.arc(x, y, radius, initAngle, finalAngle)
ctx.beginPath()
ctx.arc(350, 60, 50, 0, Math.PI * 2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.arc(350, 160, 50, 0, Math.PI * 2)
ctx.stroke()
ctx.closePath()

// lineas y/o otras figuras
// ctx.moveTo(x, y)
// ctx.lineTo(x, y)

ctx.beginPath()
ctx.moveTo(450, 10)
ctx.lineTo(450, 110)
ctx.lineTo(550, 60)
ctx.lineTo(450, 10)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.moveTo(650, 10)
ctx.lineTo(650, 110)
ctx.lineTo(550, 60)
ctx.lineTo(650, 10)
ctx.fill()
ctx.closePath()
