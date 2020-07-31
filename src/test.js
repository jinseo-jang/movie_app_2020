function fetchItems() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var items = [1, 2, 3];
      resolve(items);
    }, 3000);
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}

function fetchComs() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("완료!"), 3000);
  });
}

async function logComs() {
  var resultComs = await fetchComs();
  console.log(resultComs);
}

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("완료!"), 3000);
//     //console.log("here");
//   });
//   let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
//   console.log(result); // "완료!"
// }

logItems();
logComs();
//[1,2,3]
//완료!
