

var results;


function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


const resultContainer = document.querySelector('#search-result-container');


function renderResults()
{
    resultContainer.innerHTML = ``;
    for(r of results)
    {
        resultContainer.innerHTML += `
            <div class = 'search-result'> 
               <div>
                   <div class='users-profile-pic'></div>
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
    data: { query: search_bar.value },  // data to submit
    success: function (data, status, xhr) {
        results = data.data;
        renderResults();
    }
});

search_bar.addEventListener('keyup',() => {
        $.ajax('/comment/api/get-comments', {
            type: 'POST',  // http method
            data: { query: search_bar.value },  // data to submit
            success: function (data, status, xhr) {
                results = data.data;
                renderResults();
            }
        });
});


document.querySelector('#home-nav').classList.add('nav-highlight');