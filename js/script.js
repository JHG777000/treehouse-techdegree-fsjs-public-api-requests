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
     document.getElementById('gallery')
      .appendChild(createUser(users[i]));
  }
}

function createUser(user) {

  let card_div = document.createElement('div');
  card_div.className = 'card';

  let img_div = document.createElement('div');
  img_div.className = 'card-img-container';

  let img = document.createElement('img');
  img.className = 'card-img';
  img.src = user.picture.large;

  img_div.appendChild(img);

  let info_div = document.createElement('div');
  info_div.className = 'card-info-container';

  let name = document.createElement('h3');
  name.id = user.name.first + ' ' + user.name.last;
  name.className = 'card-name cap';
  name.innerText = name.id;

  let email = document.createElement('p');
  email.className = 'card-text';
  email.innerText = user.email;

  let location = document.createElement('p');
  location.className = 'card-text cap';
  location.innerText = user.location.city + ',' + user.location.state;

  info_div.appendChild(name);
  info_div.appendChild(email);
  info_div.appendChild(location);

  card_div.appendChild(img_div);
  card_div.appendChild(info_div);

  return card_div;

}