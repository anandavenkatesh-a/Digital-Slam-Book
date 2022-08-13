

const home = document.querySelector('#home-nav');
const profile = document.querySelector('#profile-nav');
const friends = document.querySelector('#friends-nav');
if(window.location.href == "http://localhost:9993/user/home")
{
    try{home.classList.add('nav-highlight')}catch{}
    try{profile.classList.remove('nav-highlight')}catch{}
    try{friends.classList.remove('nav-highlight')}catch{}
}
if(window.location.href == "http://localhost:9993/user/profile")
{
    try{home.classList.remove('nav-highlight')}catch{}
    try{profile.classList.add('nav-highlight')}catch{}
    try{friends.classList.remove('nav-highlight')}catch{}
}
if(window.location.href == "http://localhost:9993/user/friends")
{
    try{home.classList.remove('nav-highlight')}catch{}
    try{profile.classList.remove('nav-highlight')}catch{}
    try{friends.classList.add('nav-highlight')}catch{}
}