function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyCfhZoex4ACGAQUyPZomMVuir6kfhKZ28k",
    authDomain: "kwitter-project-a4e1c.firebaseapp.com",
    databaseURL: "https://kwitter-project-a4e1c-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-a4e1c",
    storageBucket: "kwitter-project-a4e1c.appspot.com",
    messagingSenderId: "972686672181",
    appId: "1:972686672181:web:91c70268de2b885c994c7c",
    measurementId: "G-FTJ3L2RN83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var room_name = localStorage.getItem("room_name");
var user_name = localStorage.getItem("user_name");

function send() {
    msg = document.getElementById("msg").value;
    firebaseConfig.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    })

    document.getElementById("msg").value = "";
};