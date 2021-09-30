// form 

let form = document.querySelector('form');

let lettersOnly = /^[a-æøåA-ÆØÅ\s\-]{2,}$/;

let valMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

let regexPhone = /^[\d]{8,8}$/;

let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\S])[a-zA-Z0-9\S]{8,}$/;

let regexUser = /^[a-æøåA-ÆØÅ\d\S]{5,}$/;


let name1 = "Ideæø";
let name2 = "Ideæø121";

let mail1 = "supermiavsen@hotmail.com";
let mail1 = "jakflæf."

let user1 = "Miemusen1!";
let user2 = "mie";




console.log(lettersOnly.test(name1));
console.log(lettersOnly.test(name2));

console.log(valMail.test(mail1));
console.log(valMail.test(mail2));

console.log(regexUser.test(user1));
console.log(regexUser.test(user2));

let releaseK = document.querySelector('#submit')

form.submit.addEventListener('click', function(){


    if(lettersOnly.test(form.name.value)){

        console.log("This name is valid");
    }else{

        console.log("Numbers are not allowed!");
    }

    if(regexUser.test(form.username.value)){

        console.log("Great username!");

    }else{

        console.log("it must contain, Upper and lowercase letter as well as a symbol and a number");
    }

    if(valMail.test(form.email.value)){

        console.log("Nice email");
    }else{

        console.log("NOT GOOD ENOUGH!");
    }

   
});


