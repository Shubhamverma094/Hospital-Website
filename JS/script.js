let navicon=document.querySelector('.nav-icon');
let ul =document.querySelector('ul');
let val=true;
navicon.addEventListener('click',function(){
    ul.classList.toggle("showdata")
    console.log(ul);
    console.log("Clicked");
   if(ul.className==='showdata'){
    document.querySelector('#bar').className='fa-solid fa-xmark';

   }else{
    document.querySelector('#bar').className='fa-solid fa-bars'
   }
    
   if(ul.className==='showdata'){
    document.querySelector('.Home').className=true;
   }else{
    document.querySelector('.Home').className=false;
   }
})