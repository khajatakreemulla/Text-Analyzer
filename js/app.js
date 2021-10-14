
// ---------------------------------------- Dom Targeting -----------------------------

let textarea = document.querySelector('#text');
let btn = document.getElementById('btn');
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById("uppercase")
let words = document.getElementById('words')
let vowels = document.getElementById('vowels');
let consonant = document.getElementById('consonant');
let spaces = document.getElementById('spaces');


// --------------------- java script for getting values from text area -------------------

const nolength = (item) =>(item == null? 0 : item.length)
btn.addEventListener('click', ()=>{
    let text = textarea.value;
    lowercase.innerHTML = nolength(text.match(/[a-z]/g));
    uppercase.innerHTML = nolength(text.match(/[A-Z]/g));
    words.innerHTML = nolength(text.match(/[a-zA-Z]+/g));
    vowels.innerHTML = nolength(text.match(/[aeiou]/gi));
    consonant.innerHTML = nolength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
    spaces.innerHTML = nolength(text.match(/\s/g));
   
});


// ------------------- java script for clearing the form --------------------------------------
   
btn1.addEventListener('click', ()=>{
    textarea.value = "";
    lowercase.innerHTML = "0";
    uppercase.innerHTML = "0";
    words.innerHTML = "0";
    vowels.innerHTML = "0";
    consonant.innerHTML = "0";
    spaces.innerHTML = "0";
})


// ------------------------------ java script for changing to upper case---------------------------

btn2.addEventListener("click", ()=>{
textarea.value = textarea.value.toUpperCase();
})

// ------------------------------ java script for changing to lower case---------------------------

btn3.addEventListener("click", ()=>{
    textarea.value = textarea.value.toLowerCase();
})




