url = 'http://127.0.0.1:5500'

if (window.location.href == url + '/') {
    document.querySelector("#home").classList.add('bg-black', 'text-white')
}
if (window.location.href == url + '/about.html') {
    document.querySelector("#about").classList.add('bg-black', 'text-white')
}
if (window.location.href == url + '/services.html') {
    document.querySelector("#service").classList.add('bg-black', 'text-white')
}
if (window.location.href == url + ('/login.html' || '/signup.html')) {
    document.querySelector("#quote").classList.add('bg-black', 'text-white')
}

function showMore() {
    document.querySelector("#cards").classList.remove('h-svh', 'overflow-hidden')
    document.querySelector("#btn").classList.add('hidden')
}

function subs() {
    const word = document.getElementById('newsltr')
    if (word != null) {
        alert('Subscribed')
    }
}

let line = ['We are a top-tier graphic design studio focused on unique branding and eye-catching illustrations',
    'Located in Ottawa, We are a leading design agency known for our attention to detail and commitment to producing visually compelling brand materials',
    `Catching Illustrations via unique approach to design.<br> Contact us today to get started`,
    "Let's make your brand stand out together."]
let index = 0

setInterval(() => {
    document.getElementById('subhead').innerHTML = line[index];
    index++;
    if (index == line.length) {
        index = 0;
    }
}, 2000, []);

function model() {
    document.getElementById('modelWindow').classList.remove('hidden')
}
function back() {
    document.getElementById('modelWindow').classList.add('hidden')
}

function showNavBar() {
    alert('Working')
}