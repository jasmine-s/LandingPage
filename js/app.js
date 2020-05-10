
//Works Fine with 90% zoom 
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const sec = document.getElementsByTagName('section');//It will used to get sections data
const nav = document.getElementById('navbar__list');//It will used building nav 
const content = document.querySelector('.paragraph');//Trail
const ContentEditable = document.querySelector('#todo');//It will be used to store some content with in browser_Practice with Local Storage

/**
* End Helper Functions
* Begin Main Functions
* 
*/

// build the nav
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
//Dynamic part1
// Build menu 
//1.set delay for 12s 
//2.build list items
//2.i create list element nd anchor element and one textNode for anchor tag 
//2.ii create link for anchor tag using dataset(nav)
//3. append anchor tag to li
//4. append li to nav
alert("Please Wait Nav Building Started dynamically");
window.onload = () => {
    setTimeout(() => {
        document.getElementById("first").style.display = "none";
    }, 12000);
}
setTimeout(() => {
    document.querySelector("#first").style.display = "block";
    for (var item of sec) {
        const listItem = document.createElement('li');
        var a = document.createElement('a');
        var link = document.createTextNode(`${item.dataset.nav}`);
        a.appendChild(link);
        a.title = `${item.dataset.nav}`;
        a.href = `#${item.id}`;
        listItem.innerHtml=listItem.appendChild(a);
        nav.appendChild(listItem);
    }
}, 3000);
setTimeout(() => {
    alert("Thank  You..!! Nav Built Succesfully");
}, 4000);
window.onload = () => {
    setTimeout(() => {
        document.getElementById("first").style.display = "block";
    }, 1000);
}
//Working_/_/
// Scroll to section on link click

// Set sections as active

window.addEventListener("scroll", function () {
    for (var i = 0; i < 4; i++) //here 4 says no.of sections in nav's ul
    {
        //getting section in view or not
        var bounding = sec[i].getBoundingClientRect();
        if (bounding.top >= -25 && bounding.left >= -15 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            // -15 describes when user scrolled up(>heading) then section modification enables 
            //Trail-01
            //checked _/_/ active or not and showing h5 content by using dom
            //var   document.getElementById("find")_/_/Working
            //adding styles to section with adding class 
            nav.childNodes[i].className += "my-active-menu";//Type 1 of assigning class X error part X
            //Need to add active anchor class X_X
            sec[i].classList.add("my-active-class");//T-2 of assigning class _/_/
            //Tried adding styles with 'style'_/_/
            content.style.color = '#6a4';
        }
        else {
            nav.classList.remove("my-active-menu");
            sec[i].classList.remove("my-active-class");
        }
    }
});

//dynamic part-2
//for content Local Storage Practice for capstone
function getContent() {
    if (localStorage.getItem('ContentEditable') === null) {
        ContentEditable.textContent = 'You can Change Content Here and Store Your data Locally.';
    }
    else {
        ContentEditable.textContent = localStorage.getItem('ContentEditable');
    }
}
//setting user's content 
function setContent(user) {
    if (user.type === "keypress") {
        localStorage.setItem('ContentEditable', user.target.innerText);
    }
    else {
        localStorage.setitem('ContentEditable', user.target.innerText);
    }
}
//invoke
ContentEditable.addEventListener('keypress', setContent);
getContent();