

const UserName = document.querySelector('input[name="name"]');
const UsernameWarning = document.querySelector('#username-warning');
const Submit = document.querySelector('button');
UserName.addEventListener('keyup',() => {
    $.ajax('/user/username_exits', {
        type: 'POST',  // http method
        data: { 
                query: UserName.value
              },  // data to submit
        success: function (data, status, xhr) {
            if(data.data == 'y')
            {
               UsernameWarning.style.display = 'inherit';
               Submit.disabled = true;
            }
            else
            {
               UsernameWarning.style.display = 'none'
               Submit.disabled = false;
            }
        }
    });
});