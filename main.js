let tablinks = document.querySelectorAll('.tab-links')
let tabcontents = document.querySelectorAll('.tab-contents')

function opentab(tabname) {
    for (const tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }
    this.event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab")
}

let sidemenu = document.querySelector('#sidemenu')

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}