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


function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "Kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
            });
        });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}