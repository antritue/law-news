// function showMenu() {
//     var menu = document.getElementById('menu')
//     if (menu.style.display == 'none') {
//         menu.style.display = 'block'
//     } else {
//         menu.style.display = 'none'
//     }
// }

let navMobile = document.getElementById('menu')

function showMenu() {
    if (navMobile.className === "menu") {
        navMobile.className += " show";
    } else {
        navMobile.className = "menu";
    }
}