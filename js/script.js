/******************************************
Treehouse Techdegree:
FSJS project 5 - Public API Requests
******************************************/

getUsers();
showSearchBar();

function getUsers() {
  fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json())
    .then(data => displayUsers(data.results));
}

function displayUsers(users) {
  for (let i = 0; i < users.length; i++) {
    document.getElementById('gallery').appendChild(createUser(users[i]));
  }
}

function createUser(user) {
  let card_div = document.createElement('div');
  card_div.className = 'card';
  card_div.addEventListener('click', () => display_modal(user));

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

function display_modal(user) {
  let modal_container_div = document.createElement('div');
  modal_container_div.className = 'modal-container';

  let modal_div = document.createElement('div');
  modal_div.className = 'modal';

  let button = document.createElement('button');
  button.type = 'button';
  button.id = 'modal-close-btn';
  button.className = 'modal-close-btn';
  button.addEventListener('click', () =>
    modal_container_div.parentNode.removeChild(modal_container_div)
  );

  let strong = document.createElement('strong');
  strong.innerText = 'X';
  button.appendChild(strong);

  let info_div = document.createElement('div');
  info_div.className = 'modal-info-container';

  let img = document.createElement('img');
  img.className = 'modal-img';
  img.src = user.picture.large;
  img.alt = 'profile picture';

  let name = document.createElement('h3');
  name.id = user.name.first + ' ' + user.name.last;
  name.className = 'modal-name cap';
  name.innerText = name.id;

  let email = document.createElement('p');
  email.className = 'modal-text';
  email.innerText = user.email;

  let location = document.createElement('p');
  location.className = 'modal-text';
  location.innerText = user.location.city;

  let phone = document.createElement('p');
  phone.className = 'modal-text';
  phone.innerText = user.cell;

  let location_full = document.createElement('p');
  location_full.className = 'modal-text';
  location_full.innerText =
    user.location.street.number +
    ' ' +
    user.location.street.name +
    ',' +
    user.location.city +
    ',' +
    user.location.state +
    ' ' +
    user.location.postcode;

  let birthday = document.createElement('p');
  birthday.className = 'modal-text';
  birthday.innerText = 'Birthday: ' + user.dob.date;

  modal_div.appendChild(button);
  modal_div.appendChild(img);
  modal_div.appendChild(name);
  modal_div.appendChild(email);
  modal_div.appendChild(location);
  modal_div.appendChild(document.createElement('hr'));
  modal_div.appendChild(phone);
  modal_div.appendChild(location_full);
  modal_div.appendChild(birthday);

  modal_container_div.appendChild(modal_div);

  document.getElementsByTagName('body')[0].appendChild(modal_container_div);
}

/*
   The showSearchBar function, displays a search bar,
   allowing the search of users.
*/

function showSearchBar() {
  let search_container = document.getElementsByClassName('search-container')[0];

  let input = document.createElement('input');
  input.type = 'search';
  input.id = 'search-input';
  input.className = 'search-input';
  input.addEventListener('keyup',search_users);
  input.placeholder = 'Search...';
  search_container.appendChild(input);

  let button = document.createElement('input');
  button.type = 'submit';
  button.value = '🔍';
  button.id = 'search-submit';
  button.className = 'search-submit';
  button.addEventListener('click',search_users);
  search_container.appendChild(button);
  
 /*
    The search_users function, searches the users' array to find and 
    display matches.
  */

  function search_users() {
     let users_array = document.getElementsByClassName('card'); //Array of users to search.
     for (let i = 0; i < users_array.length;i++) {
        let user = users_array[i].getElementsByTagName('h3')[0].innerText;
        if ( (input.value.length > 0) && user.toLowerCase().includes(input.value.toLowerCase()) ) {
          users_array[i].style.display = '';
        } else {
          users_array[i].style.display = 'none';
        }
     }
     if (input.value.length === 0) {
      for (let i = 0; i < users_array.length;i++) {
        users_array[i].style.display = '';
      }
   }
    }
  }
