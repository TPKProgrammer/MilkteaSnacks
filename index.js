
/*BLURRING*/
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.hero')

let load = 0

let int = setInterval(blurring, 20)

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 7, 0)}px)`
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}





/*HAMBURGER*/
const menu = document.getElementById("menu");


menu.onclick = function(){
    menu.classList.toggle("openmenu");
}



/*MENU-ITEMS*/
const menuItems = document.getElementById("menu-items");

menuItems.style.maxHeight = "0px";

function menutoggle(){
    if(menuItems.style.maxHeight == "0px")
    {
            menuItems.style.maxHeight = "550px"
            menuItems.style.opacity = 1;
    }
      else
        {
            menuItems.style.maxHeight = "0px"
            menuItems.style.opacity = 0.9;
        }
}