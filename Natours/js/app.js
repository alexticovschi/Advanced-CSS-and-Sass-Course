const navListItems = document.getElementsByClassName("navigation__item");
const body = document.querySelector('body');
const menuCheckbox = document.querySelector('.navigation__checkbox');

// loop through all the elements of the array and assigning them a condition
for(link in navListItems){ 
    navListItems[link].onclick = function(){ // for each item of the array execute the following function when it is clicked.
        document.getElementById("navi-toggle").checked = false; //close the menu by unchecking the checkbox
        body.classList.toggle('u-hide-overflow-y');
    };  
}

// hide the scrollbar
menuCheckbox.addEventListener("change", () =>
    body.classList.toggle('u-hide-overflow-y')
);