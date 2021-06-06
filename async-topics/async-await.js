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

async function menuyuAl() {
  try {
      
    const token = await login("murat", "1234");
    
    const restaurants = await getRestaurants(token);
    const menu = await getMenu(restaurants[0]);
    console.log(menu);

  } catch (error) {
    console.log(error);
  }
}

menuyuAl();

console.log("end");
