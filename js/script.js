/******************************************
Treehouse Techdegree:
FSJS project 5 - Public API Requests
******************************************/

getUsers();

 function getUsers() {
  fetch('https://randomuser.me/api/?results=12')
   .then(response => response.json())
   .then(data => displayUsers(data.results));
}

function displayUsers(users) {

  for (let i = 0; i < users.length; i++) {
    alert(users[i].gender);
    alert(users[i].name.title + ' ' 
    + users[i].name.first + ' ' 
    + users[i].name.last);
  }
}