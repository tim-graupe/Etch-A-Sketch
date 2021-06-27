const content = document.querySelector('#content');
const resizeBtn = document.querySelector('#resizeBtn');
const bw = document.querySelector('#bwButton');
const patriotic = document.querySelector('#patriotic');
const clear = document.querySelector('#clear');
const divs = document.querySelectorAll('div');

const defaultColor = () => {
  const gridDiv = document.createElement('div');
  gridDiv.addEventListener('mouseover', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    gridDiv.style.backgroundColor = "#" + randomColor;
});
  content.appendChild(gridDiv)
}



const bwGrid = () => {
  clearDivs()
  const gridDiv = document.createElement('div');
  gridDiv.addEventListener('mouseover', () => {
      gridDiv.style.backgroundColor = "#000000";
});
  content.appendChild(gridDiv)
}




const clearDivs = () => {
divs.forEach((div) => {
content.textContent = "";
})
defaultGrid()

}

const newGrid = () => {

const grid = prompt("Enter size")
if (grid > 100) {
  alert("Please enter a number no higher than 100! Think of your poor CPU....")
} else {
clearDivs()
for (i = 0; i < grid * grid; i++) {
defaultColor()
}
content.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
content.style.gridTemplateRows = `repeat(${grid}, 1fr)`;         
}
}

const defaultGrid  = () => {
  const grid = 16;
  for (i = 0; i < grid * grid; i++) {
defaultColor()
  }
  content.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
content.style.gridTemplateRows = `repeat(${grid}, 1fr)`;    
}

defaultGrid()
resizeBtn.onclick = () => newGrid();
clear.onclick = () => clearDivs();
bw.onclick = () => bwGrid();