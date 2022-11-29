// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


const polygonsArray = document.querySelectorAll('polygon');
for (const polygon of polygonsArray) {
  polygon.onclick = event => {
    console.log(event);
    event.currentTarget.classList.toggle('unmarked');
    event.currentTarget.classList.toggle('marked');
  };
}