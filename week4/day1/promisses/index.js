// const cambie = true

// const teAma = new Promise((resolve, reject) => {
//   if(cambie){
//     resolve('si ve, te perdono')
//   }else{
//     reject(new Error('Me mentistes, dijste que bias a cambiar pero nel'))
//   }
// })

// // teAma
// //   .then(response => {
// //     console.log(response)
// //   })
// //   .catch(err => console.error(err))

// const getFromDB = new Promise((resolve, reject) => {
//   setTimeout(() => resolve({ hi: true }), 2000)
// })

// console.log( getFromDB instanceof Promise)

// // getFromDB
// //   .then(response => console.log(response))
// //   .catch(err => console.error(err))

// Promise.race([teAma, getFromDB])
//   .then(results => console.log(results))
//   .catch(err => console.error(err))

//----- Pre asyn await

const cambie = true;

const teAma = new Promise((resolve, reject) => {
  if (cambie) {
    resolve("si ve, te perdono");
  } else {
    reject(new Error("Me mentistes, dijste que bias a cambiar pero nel"));
  }
});

const getFromDB = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ hi: true }), 2000);
});
// 1. Tener una funcion con codigo asincrono o identificar la funcion que realiza cierto codigo asincrono

//2. Decirle a la funcion que va a ejecutar codigo asincrono (con la palabra clave async)

//3. esperamos a la resoluion de la promesa con la palabra await

// manejo de errores con try catch
// async function asyncCode(){
//   try{
//   const result = await teAma
//   console.log(result)
//   }catch(err){
//     console.log(err)
//   }
// }

(async function () {
  const result = await Promise.all([teAma, getFromDB]);
  console.log(result);
})().catch((err) => console.log(err));
