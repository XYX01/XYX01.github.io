/*document.querySelector('html').onclick = function(){
    alert("Ouch! Stop poking me!");
}

*/
let myImage =document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/anime-girl.jpeg'){
        myImage.setAttribute('src','images/rin.jpg');
    } else{
        myImage.setAttribute('src','images/anime-girl.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }
    localStorage.setItem('name',myName);
    myHeading.textContent ='Welcome home master-sama, ' +myName +'!';
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome home master-sama, ' +storedName +'!';
}

myButton.onclick = function(){
    setUserName();
}