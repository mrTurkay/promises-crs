console.log("begin");

function login(username, password, cb) {
  setTimeout(() => {
    console.log("login yapılıyor");
    const token = `${username}123123sf${password}`;
    cb(token);
  }, 2000);
}

function callback(token) {
  console.log("login function içi", token);
}

login("murat", 12341234, callback);

console.log("end");
