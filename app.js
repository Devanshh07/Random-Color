

const body = document.querySelector("body");
const btn = document.querySelector("button");

const color =
 ["Aqua",
    "Black",
    "Blue",
    "Fuchsia",
    "Gray",
    "Green",
    "Lime",
    "Maroon",
    "Navy",
    "Olive",
    "Purple",
    "Red",
    "Silver",
    "Teal",
    "White",
    "Yellow"]


function randomColor(){
    let num = Math.floor((Math.random()*10));
    return num;
};

btn.addEventListener("click",(evt)=>{
    let num = randomColor();
    let clr = color[num];
    console.log(clr);
    body.style.backgroundColor = clr;
})

