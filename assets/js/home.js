

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
               ${r.to.name}
            </div>    
        `; 
    }
}
const search_bar = document.querySelector('#search-bar');


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

