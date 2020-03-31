// Variables que hacen referencia a nodos del DOM
const $img = document.querySelector("img");
const $body = document.querySelector("body");
const $main = $body.querySelector("main");
const $inputItem = $body.querySelector("#item-input");
const $inputButton = $body.querySelector("button");

console.log($img.getAttribute("alt"));

$img.setAttribute(
  "src",
  "https://pm1.narvii.com/7203/6900e6d4eb3ce4c37fab3b31e9ab89871d519336r1-1237-700v2_hq.jpg"
);
$img.setAttribute("yoolo", "joss");

// Crear elementos del DOM en js

const $list = document.createElement("ul");

$list.innerHTML = `<li>hola</li>`;
// colocar el elemento como ultimo hijo de la etiqueta padre
// $main.appendChild($list);

console.log($list);

// Puedo definir el orden donde colocar los lementos si dispongo del elemento siguiente
// En el padre, inserta el nuevo elemento antes del elemnento hijo
$main.appendChild($list);
$body.removeChild($img);
// limpiamos el contenido de la etiqueta ul
$list.innerHTML = "";

// Generamos la funino para insertar elementoss en nuestra lista
function getInputItem() {
  //obtenemos el valor que nuestro usuario inserta en nuestro input
  let value = $inputItem.value;
  if (!value) return;
  // 1. necesitamos crear un li
  const $li = document.createElement("li");
  // agregamos el valor que escribio el usuario como un nodo de texto
  const text = document.createTextNode(value); // equivalente a innerText
  // 2. agregar el elemento value generado con el createNode como texto al li
  $li.appendChild(text);
  // 3. agregar un elemento que me permita borrar y marcar como hecho
  const $deleteButton = document.createElement("button");
  $deleteButton.innerText = "borrar";
  const $doneButton = document.createElement("button");
  $doneButton.innerText = "hecho";
  // 3.1 agregar el evento click a los botones
  $deleteButton.onclick = () => {
    //ayuda a remover el elemento de la lista que se creo en el momento en el que la
    //funcion fue llamada
    $list.removeChild($li);
  };
  // esta funion ayuda a marccar como hecho el elemento creado en la llamada de la funcion
  $doneButton.onclick = () => {
    if ($li.className) {
      $li.className = "";
    } else {
      $li.className = "done";
      $li.className += " otraclase";

      console.log([...$li.classList].includes("done"));
    }
  };
  // 3.2 Agregar el boton al elemento de lista
  $li.appendChild($deleteButton);
  $li.appendChild($doneButton);
  // 5. argegar el li a la lista
  $list.appendChild($li);
  $inputItem.value = "";
}

$inputButton.onclick = getInputItem;
