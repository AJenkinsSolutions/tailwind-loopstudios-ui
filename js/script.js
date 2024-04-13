

const button = document.getElementById('menu-button')
const menu = document.getElementById('mobile-menu')

button.addEventListener('click', navToggle)

function navToggle(){

    // Method 1
    // built in class to toggle the class
    button.classList.toggle('open')

    //Off by default
    //First click will turn it on
    menu.classList.toggle('flex')
    

    //Hidden is ON by default
    //first click removes hidden
    menu.classList.toggle('hidden')
}

// Method 2
    //Add and remove the class
    // btn.classList.add('open')
    // btn.classList.remove('open')