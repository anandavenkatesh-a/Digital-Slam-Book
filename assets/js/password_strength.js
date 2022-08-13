

const StrLevel = document.querySelector('#pass-str');
StrLevel.style.display = 'none';
const PasswordInput = document.querySelector('input[type="password"]');
const Lowlevel = document.querySelector('#low-str');
const MedLevel = document.querySelector('#med-str');
const HighLevel = document.querySelector('#str-str');
PasswordInput.addEventListener('keyup',() => {
    let password = PasswordInput.value;
    if(password.length == 0)
    {
        StrLevel.style.display = 'none';
    }
    else
    {
        StrLevel.style.display = 'inherit';
    }

    if(password.length <= 3)
    {
       Lowlevel.style.backgroundColor = 'red';
       MedLevel.style.backgroundColor = 'grey';
       HighLevel.style.backgroundColor = 'grey'; 
    }
    else if(password.length <= 6)
    {
       Lowlevel.style.backgroundColor = 'yellow';
       MedLevel.style.backgroundColor = 'yellow';
       HighLevel.style.backgroundColor = 'grey'; 
    }
    else
    {
       Lowlevel.style.backgroundColor = 'green';
       MedLevel.style.backgroundColor = 'green';
       HighLevel.style.backgroundColor = 'green'; 
    }
});