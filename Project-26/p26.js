const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const userName = document.getElementById('name');
const date = document.getElementById('date');
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const apiUrl = 'https://randomuser.me/api/';

function fetchAPI() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const { first } = data.results[0].name;
      const { thumbnail } = data.results[0].picture;

      profile_img.innerHTML = `<img src="${thumbnail}" alt="Profile Picture" />`;
      userName.innerText = first;
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

setTimeout(getData, 2500);

function getData() {
  fetchAPI();
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="Cover" />`;
  title.innerText = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
  date.innerText = 'Oct 08, 2020';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
