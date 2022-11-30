const textInput = document.getElementById('text');
const btn = document.getElementById('convert-btn');


btn.addEventListener('click', ()=>{
    try {
        if(!textInput.value){
            throw "please enter a string"
         }
         let trimString = textInput.value.trim().split(' ').join('');
         alert(trimString) 


    } catch (error) {
        alert(error)
    }
    
})