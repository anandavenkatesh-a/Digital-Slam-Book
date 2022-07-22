

const type_writter = document.querySelector('#type-writter');
const sent1 = 'Remember your friends for ever!';
const sent2 = 'with DSbook';
var state = 0;
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

type_writter.innerHTML = '';
async function change_state()
{
    if(state == 0)
    {
        if(type_writter.innerHTML.length == sent1.length)
        {
            state = 1;
            await sleep(1000);
        }
        else
        {
            type_writter.innerHTML = sent1.substr(0,type_writter.innerHTML.length+1);
        }
    }
    else if(state == 1)
        {
            if(type_writter.innerHTML.length == 0)
            {
                state = 2;
                await sleep(1000);
            }
            else
            {
                type_writter.innerHTML = sent1.substr(0,type_writter.innerHTML.length-1);
            }
        }
        else if(state == 2)
        {
            if(type_writter.innerHTML.length == sent2.length)
            {
                state = 3;
                await sleep(1000);
            }
            else
            {
                type_writter.innerHTML = sent2.substr(0,type_writter.innerHTML.length+1);
            }
        }
        else
        {
            if(type_writter.innerHTML.length == 0)
            {
                state = 0;
                await sleep(1000);
            }
            else
            {
                type_writter.innerHTML = sent2.substr(0,type_writter.innerHTML.length-1);
            }
        }
    await sleep(30);

}
async function type_write_animation()
{
    while(true){
        await change_state();
    };
};
type_write_animation();




