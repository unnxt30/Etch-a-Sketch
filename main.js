const container = document.querySelector("#main-container");
const board = document.querySelector("#main-container .board");
// const create = document.querySelector("[id = 'create']");


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

//black paint
const mono_color = document.querySelector("[id = 'monoColor']");
console.log(mono_color);

const picker = document.createElement("input");
picker.setAttribute("type", "color");
picker.style.margin = "10px";
// picker.style.borderRadius = "50%";
picker.style.border = "none";
picker.style.width = "120px";
picker.style.height = "50px";
picker.style.padding = "0px";
picker.style.backgroundColor = "#202020"
picker.style.cursor =" pointer";
picker.style.outline = "none";
picker.setAttribute("value", "#501cfe");
const func = document.querySelector("[class = 'functions']");
func.insertBefore(picker, mono_color);

mono_color.onclick = function()
{   
    for (let j = 0; j<256; j++)
    {
        square_color[j].onmouseover = function()
        {   
            square_color[j].style.backgroundColor = picker.value;
        };
    }
}

//rainbow paint
const rgb_color = document.querySelector("[id = 'rgb']");

rgb_color.onclick = function()
{
    for (let j = 0; j<256; j++)
    {
        square_color[j].onmouseover = function()
        {   
            square_color[j].style.backgroundColor = random_bg_color();
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







