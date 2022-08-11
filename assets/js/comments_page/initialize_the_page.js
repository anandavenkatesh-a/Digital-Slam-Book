

const CommentSection = document.querySelector('#main-container2');
const Section = document.querySelector('#main-container');
const ProfileSection = Section.querySelector('#main-container1');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
Section.removeChild(ProfileSection);
Section.removeChild(CommentSection);
section1.addEventListener('click',() => {
    try{CommentSection.remove()}catch{}
    section2.style.color = 'white';
    Section.appendChild(ProfileSection);
    section1.style.color = '#fd03e4';
});
section2.addEventListener('click',() => {
    try{ProfileSection.remove()}catch{}
    section1.style.color = 'white';
    Section.appendChild(CommentSection);
    section2.style.color = '#fd03e4';
})
try{CommentSection.remove()}catch{}
    section2.style.color = 'white';
    Section.appendChild(ProfileSection);
    section1.style.color = '#fd03e4';

const inputs = ProfileSection.querySelectorAll('input');
for(input of inputs)
{
    input.style.pointerEvents = 'none';
}