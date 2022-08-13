

var results;


function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


const Department = document.querySelector('select[name="dept"]');
const Hostel = document.querySelector('select[name="hostel"]');

nitt_hostels.forEach((hostel) => {
    if(hostel != '')
    {
        let hostel_option;
        hostel_option = `<option value="${hostel}">${hostel}</option>`;
        Hostel.innerHTML += hostel_option;
    }
});
nitt_depts.forEach((dept) =>{
    if(dept != '')
    {
        let dept_option;
        dept_option = `<option value="${dept}">${dept}</option>`;
        Department.innerHTML += dept_option;
    }
});
const resultContainer = document.querySelector('#search-result-container');

function renderResults()
{
    resultContainer.innerHTML = ``;
    for(r of results)
    {
        resultContainer.innerHTML += `
            <div class = 'search-result'> 
               <div>
                   <div class='users-profile-pic' style="background-image: url('${r.to.avatar}');"></div>
                   <span class = 'users-name'>${r.to.name}</span>
               </div>   
               <a class='users-name' href = ${'/comment/show-comment?id='+r._id}><img src='/images/wishlist.png'></a>
            </div>    
        `; 
    }
}
const search_bar = document.querySelector('#search-bar');


$.ajax('/comment/api/get-comments', {
        type: 'POST',  // http method
        data: { 
                query: search_bar.value ,
                dept:Department.value,
                hostel:Hostel.value
              },  // data to submit
        success: function (data, status, xhr) {
            results = data.data;
            renderResults();
        }
});

search_bar.addEventListener('keyup',() => {
        $.ajax('/comment/api/get-comments', {
            type: 'POST',  // http method
            data: { 
                    query: search_bar.value ,
                    dept:Department.value,
                    hostel:Hostel.value
                  },  // data to submit
            success: function (data, status, xhr) {
                results = data.data;
                renderResults();
            }
        });
});
Hostel.addEventListener('click',() => {
    $.ajax('/comment/api/get-comments', {
        type: 'POST',  // http method
        data: { 
                query: search_bar.value ,
                dept:Department.value,
                hostel:Hostel.value
              },  // data to submit
        success: function (data, status, xhr) {
            results = data.data;
            renderResults();
        }
    });
});


Department.addEventListener('click',() =>{
    $.ajax('/comment/api/get-comments', {
        type: 'POST',  // http method
        data: { 
                query: search_bar.value ,
                dept:Department.value,
                hostel:Hostel.value
              },  // data to submit
        success: function (data, status, xhr) {
            results = data.data;
            renderResults();
        }
    });
});