const container = document.querySelector("#main-container");
const board = document.querySelector("#main-container .board");

for(let i = 0; i<256; i++){

    const square = document.createElement("button");
    square.setAttribute('id', 'square');

    board.appendChild(square);
    
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor
    }

//Toggles coloring the board
const square_color = document.querySelectorAll("[id = 'square']")

console.log(square_color);

const mono_color = document.querySelector("[id = 'monoColor']");
console.log(mono_color);

mono_color.onclick = function()
{
    for (let j = 0; j<256; j++)
    {
        square_color[j].onmouseover = function()
        {   
            square_color[j].style.backgroundColor = "black";
        };
    }
}



//Clears the board
const clear_button = document.querySelector("[id = 'clear']");
clear_button.onclick = function()
{
for (let j = 0; j<256; j++)
{
    square_color[j].style.backgroundColor = "white";
}
}

//selects eraser
const eraser = document.querySelector("[id = 'erase']")

eraser.onclick = function()
{
for (let j = 0; j<256; j++)
{
    square_color[j].onmouseover = function()
    {
    square_color[j].style.backgroundColor = "white";
    } ;
}
}



