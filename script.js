const text = document.getElementById("text");
const myFileInput = document.getElementById("myFileInput");
const typo = document.getElementById("typo");
const title = document.getElementById("title");
const postImage = document.getElementById("post-image");
const date = document.getElementById("date");
const categoImage = document.getElementById("catego");
const btn = document.getElementById("btn");
const box = document.querySelector('.box');
const colorInput = document.getElementById('colorInput');
const onInput = document.getElementById("on-input");
const creat = document.querySelector(".create");
myFileInput.addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result)
    })

    reader.readAsDataURL(this.files[0]);
    

})
//=========================================================//
document.addEventListener("DOMContentLoaded", () =>{

    const rencetImageDataUrl = localStorage.getItem("recent-image");

    if(rencetImageDataUrl){
        postImage.setAttribute("src", rencetImageDataUrl);
        
    }
})

btn.addEventListener("click", () => {
    const rencetImageDataUrl = localStorage.getItem("recent-image");
    createposter(rencetImageDataUrl);
    text.value = "";
    typo.value = "";
})

function createposter(d){
    box.style.backgound = colorInput;
    title.innerHTML = text.value;
    date.innerHTML = "12-12-2012";
    categoImage.innerHTML = typo.value;
    postImage.setAttribute("src", d)
    console.log(colorInput.value);
}

onInput.onfocus = function(){
    document.querySelector(".pos").classList.add("invisible");
    creat.classList.add("visible");
    
}

document.getElementById("rom").onclick = function(){
    document.querySelector(".pos").classList.remove("invisible");
    creat.classList.remove("visible");
}
