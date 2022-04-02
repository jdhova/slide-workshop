let index = 0;
let slideIndex = 0;
let colorIndex = 0;


const img = document.querySelector("img");
const back = document.getElementById("back-arrow");
const next = document.getElementById("next-arrow");
const h2 = document.querySelector("h2");

const imgArray = [ 
    "images/react.png",
    "images/node.png",
    "images/js.png",
    "images/vue.jpeg",
];

const frameworkArray = [ 
    "React.js",
    "Node.js",
    "JavaScript",
    "Vue.js",
];


// Event Listener


// Next Button JS

next.addEventListener("click", function(){
    index++;
    if(index >= imgArray.length){
        index = 0;
    }
    img.src = imgArray[index];
});

next.addEventListener("click", function(){
    slideIndex++;
    if(slideIndex >= frameworkArray.length){
        slideIndex = 0;
    }
    h2.innerText = frameworkArray[slideIndex];
});





/// Back Arrow JS

back.addEventListener("click", function(){
   
   if(index <= 0){
       index = imgArray.length ;
   }
     index--;
    if(index >= imgArray.length){
        index = 0;
    }
    img.src = imgArray[index];
});

back.addEventListener("click", function(){
   
    if(slideIndex <= 0){
        slideIndex = frameworkArray.length ;
    }
    slideIndex--;
     if(slideIndex >= frameworkArray.length){
         slideIndex = 0;
     }
     h2.innerText = frameworkArray[slideIndex];
 });
 



