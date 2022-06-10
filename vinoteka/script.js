
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var firstImg = document.querySelector(".firstImg");
var secondImg = document.querySelector(".secondImg");

var i = 0;
function cycle(){
  if(i == 0){
      firstImg.id = "firstImg";
      secondImg.removeAttribute("id");
  }
  else{
      secondImg.id = "secondImg";
      firstImg.removeAttribute("id");
      i = -1;
  }
  i++;
  setTimeout("cycle()",4000);
 
}

//gallery

const gallery = document.querySelectorAll(".imageGallery");
previewBox = document.querySelector(".previewBox");
previewImg = previewBox.querySelector("img");
closeIcon = previewBox.querySelector(".closeIcon");
console.log(closeIcon);

html = document.querySelector(".html");

window.onload = ()=>{

cycle();
  
  for(let i = 0; i < gallery.length; i++){
    let newIndex = i;
    let clickImgIndex;
    gallery[i].onclick = ()=>{
      clickImgIndex = newIndex;
      function preview(){
        let selectedImgUrl = gallery[newIndex].querySelector("img").src;
        previewImg.src = selectedImgUrl;
        console.log(selectedImgUrl);
      }

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if(newIndex == 0){
        prevBtn.style.display = "none"; 
      }
      if(newIndex >= gallery.length-1){
        nextBtn.style.display = "none";
      }

      prevBtn.onclick = ()=>{
        newIndex--;
        if(newIndex == 0){
          preview();
          prevBtn.style.display = "none";
        }
        else{
          preview();
          nextBtn.style.display = "block";
        }
      }

      nextBtn.onclick = ()=>{
        newIndex++;
        if(newIndex >= gallery.length-1){
          preview();
          nextBtn.style.display = "none";
        }
        else{
          preview();
          prevBtn.style.display = "block";
        }
      }
      preview();
      html.classList.add("noScroll");
      previewBox.classList.add("show");

      closeIcon.onclick = ()=>{
        newIndex = clickImgIndex ;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        html.classList.remove("noScroll");
        previewBox.classList.remove("show");
      }
    }
  }
}


