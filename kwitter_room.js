// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKJMGXAz84l8tndFy4mz9n_9GpJWhay2Y",
    authDomain: "kwitter-project-ab6ff.firebaseapp.com",
    projectId: "kwitter-project-ab6ff",
    storageBucket: "kwitter-project-ab6ff.appspot.com",
    messagingSenderId: "730956970846",
    appId: "1:730956970846:web:0b01e824030255d9c5edcf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("username");
 document.getElementById("user_name").innerHTML = " Welcome " + user_name+"!";

 
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log(" Room name - ", Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML = row;   
  //End code
  });});}
getData();

function addRoom()
{
  Room_name = document.getElementById("room_name").Value;
  firebase.database().ref("/").child(Room_name).update({
       purpose : "adding room name" 
  });

  localStorage.setItem("room name", Room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room name", name);
  window.location = "kwitter_page.html"
}

function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
    window.location = "index.html";
  
}

function send() 
{
msg = document.getElementById("msg").value;
firebase.database().ref(Room_name).push({
  name:user_name,
  message:msg,
  like:0
});

document.getElementById("msg").value = "";
}
