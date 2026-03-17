const words = ["Python","Machine Learning","Cyber Security","Web Development"];

let i = 0;
let j = 0;
let deleting = false;

function type(){

let word = words[i];

document.getElementById("typing").textContent = word.substring(0,j);

if(!deleting && j < word.length){
j++;
}
else if(deleting && j > 0){
j--;
}

if(j === word.length){
deleting = true;
setTimeout(type,1000);
return;
}

if(j === 0){
deleting = false;
i++;
if(i === words.length){
i = 0;
}
}

setTimeout(type,120);
}

type();

let projectIndex = 0;
const slides = document.querySelectorAll(".project-slide");

function showSlide(index){
slides.forEach(s=>s.classList.remove("active"));
slides[index].classList.add("active");
}

function nextProject(){
projectIndex++;
if(projectIndex>=slides.length){
projectIndex=0;
}
showSlide(projectIndex);
}

function prevProject(){
projectIndex--;
if(projectIndex<0){
projectIndex=slides.length-1;
}
showSlide(projectIndex);
}

showSlide(projectIndex);