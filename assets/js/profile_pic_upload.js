

const ProfileEditButton = document.querySelector('#profile-pic-edit');
const ProfileUpload = document.querySelector('#upload-profile-pic');
console.log(ProfileEditButton,ProfileUpload);
ProfileUpload.remove();
ProfileUpload.style.left = ((window.innerWidth-300)/2) + 'px'; //('x',(window.innerWidth-300)/2);
ProfileUpload.style.top = ((window.innerHeight-150)/2)+'px';  //setAttribute('y',(window.innerHeight-150)/2);
window.addEventListener('resize',() => {
    ProfileUpload.style.left = ((window.innerWidth-300)/2) + 'px'; //('x',(window.innerWidth-300)/2);
    ProfileUpload.style.top = ((window.innerHeight-150)/2)+'px';  //setAttribute('y',(window.innerHeight-150)/2);
});
let prof_edit_but_clicked = false;
ProfileEditButton.addEventListener('click',(event) => {
    if(!prof_edit_but_clicked)
    {
        prof_edit_but_clicked = true;
        document.body.appendChild(ProfileUpload); 
        event.stopPropagation();
    }
    event.preventDefault();
    event.stopPropagation();
});
ProfileUpload.querySelector('#close-popup').addEventListener('click',() => {
    ProfileUpload.remove();
    prof_edit_but_clicked = false;
});

ProfileUpload.querySelector('input').style.pointerEvents = 'inherit';