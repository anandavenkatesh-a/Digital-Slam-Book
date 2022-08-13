

// const hidden_input = document.querySelector('#update-link');
// const update_url = hidden_input.value;
// console.log(update_url);
// document.querySelector('#main-container').removeChild(hidden_input); 
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


let inputs = document.querySelectorAll('.input');
for(input of inputs)
{
    input.style.pointerEvents = 'none';
}

const edit_buttons = document.querySelectorAll('.edit');
for(button of edit_buttons)
{
    button.addEventListener('click',(event) => {
        event.preventDefault();  
        let inputs = event.target.parentNode.querySelectorAll('.input');
        for(input of inputs)
        {
            input.style.pointerEvents = 'inherit';
            input.classList.add('active');
            if(input.getAttribute('type') == 'password')
            {
               input.setAttribute('type','text');
            }
        }
    });
}


const radio_yes = document.querySelector('#radio-yes');
const radio_no = document.querySelector('#radio-no');
const acc_year = document.querySelector('input[name="acc_year"]');
const acc_year_button =  document.querySelector('input[name="acc_year"]')
                                 .parentNode
                                 .querySelector('button');
const hostel = document.querySelector('select[name="hostel"]');
const hostel_button =  document.querySelector('select[name="hostel"]')
                                 .parentNode
                                 .querySelector('button');                                 
if(acc_year.value == 'past')
{
    //set radio button to yes 
    radio_yes.checked = true;
    radio_no.checked = false;

    //disable button of acc_year and hostel
    acc_year_button.disabled = true;
    hostel_button.disabled = true;
}
else
{
    //set the radio button to no
    radio_yes.checked = false;
    radio_no.checked = true;
}
radio_yes.parentNode.addEventListener('click',() => {
    if(radio_yes.checked)
    {
        acc_year.value = 'past';
        hostel.value = '';
        acc_year_button.disabled = true;
        hostel_button.disabled = true;
    }
    else
    {
       if(acc_year.value == 'past')
       {
          acc_year_button.disabled = false;
          hostel_button.disabled = false;
          acc_year.value = '';
       }
    }
});

const update_button = document.querySelector('#update');
const update = async () => {
    let is_updated = false;
    while(!is_updated)
    {
        for(input of inputs)
        {
            if(input.classList.contains('active'))
            {
                is_updated = true;
            }
        }
        await sleep(60);
    }

    //profile info are updated
    update_button.style.display = 'inline-block';
    // update_button.addEventListener('click',(event) => {
    //     let inputs = document.querySelectorAll('input[type="text"],input[type="password"]');
    //     console.log('inputs',inputs);
    //     let data = {};
    //     for(input of inputs)
    //     {
    //         let small_data1 = $(input.parentNode).serializeArray();
    //         small_data3={};
    //         small_data3[small_data1[0].name] = small_data1[0].value;
    //         data = {
    //            ...data,
    //            ...small_data3
    //         };
    //     }
    //     data3 = {};
    //     data3['name'] = data.name;
    //     data3['dept'] = data.dept;
    //     data3['acc_year'] = data.acc_year;
    //     data3['hostel'] = data.hostel;
    //     data3['password'] = data.password; 
    //     console.log(data3);
    //     if(radio_no.checked)
    //     {
    //         let acc_year_num = parseInt(data3['acc_year']);
    //         console.log(acc_year_num);
    //         if((acc_year.value == '')||(( 1 <= acc_year_num)&&(acc_year_num <= 4)))
    //         {
    //             $.ajax(update_url,{
    //                 type: 'POST',  // http method
    //                 data: data3,  // data to submit
    //                 success: function (data, status, xhr) {
    //                     console.log(data);
    //                     window.location.reload();
    //                 }
    //             });
    //         }
    //         else
    //         {
    //             window.alert(`upadte can't be made!`);
    //         }
    //     }
    //     else
    //     {
    //         $.ajax(update_url,{
    //             type: 'POST',  // http method
    //             data: data3,  // data to submit
    //             success: function (data, status, xhr) {
    //                 console.log(data);
    //                 window.location.reload();
    //             }
    //         });
    //     }
    // });
}
update();
