console.log("begin");

function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username !== "murat") reject("kullanıcı bulunamadı");
      console.log("login yapılıyor");
      const token = `${username}123123sf${password}`;
      resolve(token);
    }, 3000);
  });
}

function getRestaurants(token) {
  return new Promise((resolve, reject) => {
    if (!token) reject("login olman lazım");

    console.log("restoranlar alınıyor...");
    const restaurants = ["dominos", "konyalı", "burger"];
    resolve(restaurants);
  });
}

function getMenu(restaurant) {
  return new Promise((resolve, reject) => {
    console.log("menuler alınıyor");
    if (restaurant === "dominos") resolve(["Margarita", "Italian"]);
    else if (restaurant === "konyalı") resolve(["Kebap", "Çorba"]);
  });
}

login("mur", "1234")
  .then((token) => getRestaurants(token))
  .then((restaurants) => getMenu(restaurants[1]))
  .then((menu) => console.log(menu))
  .catch((err) => console.log(err));

console.log("end");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((value) => value.json())
//   .then((result) => console.log(result));

//   fetch("https://jsonplaceholder.typicode.com/posts/1").then((value) =>
//   console.log(value)
// );
