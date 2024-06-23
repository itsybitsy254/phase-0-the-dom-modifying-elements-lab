// Write your code here!
const mainToRemove = document.querySelector('main#main');
if (mainToRemove) {
  mainToRemove.remove();
}
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "Vitalis is the champion";

document.body.appendChild(newHeader);
