let images = []
if(screen.width > 480){
images = [ "office_img/off01.jpg",
  "office_img/off02.jpg",
  "office_img/off03.jpg",
  "office_img/off04.jpg",
  "office_img/off05.jpg",
  "office_img/off06.jpg",
  "office_img/off07.jpg",
  "office_img/off08.jpg",
  "office_img/off09.jpg",
  "office_img/off10.jpg",
  "office_img/off11.jpg",
  "office_img/off12.jpg",
  "office_img/off13.jpg",
  "office_img/off14.jpg",
  "office_img/off15.jpg"
]} else{
  images = [ "office_mobile/moff01.jpg",
  "office_mobile/moff02.jpg",
  "office_mobile/moff03.jpg",
  "office_mobile/moff04.jpg",
  "office_mobile/moff05.jpg",
  "office_mobile/moff06.jpg",
  "office_mobile/moff07.jpg",
  "office_mobile/moff08.jpg",
  "office_mobile/moff09.jpg",
  "office_mobile/moff10.jpg",
  "office_mobile/moff11.jpg",
  "office_mobile/moff12.jpg",
  "office_mobile/moff13.jpg",
  "office_mobile/moff14.jpg",
  "office_mobile/moff15.jpg"
] 
}

let i = 0
let sliderEl = document.querySelector("#slider")
let nextBtn = document.querySelector("#next-btn")
let prevBtn = document.querySelector("#prev-btn")
let pauseBtn = document.querySelector("#pause-btn")
var autoSlide = setInterval(passSlides, 5000)
let paused = false
let sliderEl2 = document.querySelector("#slider-2")
let nextInterval = false;

function displaySlideshow(slider, slider2, array){
  slider.innerHTML = `<img class="fade" src="${array[i]}"/>`
  if(i !== array.length -1 ){
  slider2.innerHTML = `<img src="${array[i+1]}"/>`}
  else{
      slider2.innerHTML = `<img src="${array[0]}"/>`
  }
}

function displaySlideshowFast(slider, slider2, array){
  slider.innerHTML = `<img class="fade-fast" src="${array[i]}"/>`
  if(i !== array.length -1 ){
  slider2.innerHTML = `<img src="${array[i+1]}"/>`}
  else{
      slider2.innerHTML = `<img src="${array[0]}"/>`
  }
}

function passSlides(){
  i++
  if(i === images.length){
   i=0
   }
  displaySlideshow(sliderEl, sliderEl2, images)
}
function displaySlideshowFastBackwards(slider, slider2, array){
  slider.innerHTML = `<img class="fade-fast" src="${array[i]}"/>`
  if(i !== 0){
  slider2.innerHTML = `<img src="${array[i-1]}"/>`}
  else{
      slider2.innerHTML = `<img src="${array[images.length-1]}"/>`
  }
}

displaySlideshow(sliderEl, sliderEl2, images)

pauseBtn.addEventListener("click", function(){
  if(nextInterval === false){
    if(paused === false){
      paused = true
      pauseBtn.textContent = "▷"
      clearInterval(autoSlide)
      sliderEl2.innerHTML = ``
      sliderEl.innerHTML = `<img src="${images[i]}"/>`
      }
     else{
      paused = false
      pauseBtn.textContent = "l l"
      if(i === images.length-1){
        sliderEl2.innerHTML = `<img src="${images[0]}"/>`
      sliderEl.innerHTML = `<img class="fade" src="${images[i]}"/>`
      }else{
      sliderEl2.innerHTML = `<img src="${images[i+1]}"/>`
      sliderEl.innerHTML = `<img class="fade" src="${images[i]}"/>`}
      autoSlide = setInterval(passSlides, 5000)
    }
  }
})
nextBtn.addEventListener("click", function(){
  if(nextInterval === false){
    clearInterval(autoSlide)
    nextInterval = true
    paused = false
    pauseBtn.textContent = "l l"
    displaySlideshowFast(sliderEl, sliderEl2, images)
    if(i !== images.length - 1 && i !== images.length - 2){
      i++
      setTimeout(function(){
      sliderEl.innerHTML = `<img class="fade" src="${images[i]}"/>`
      sliderEl2.innerHTML = `<img src="${images[i+1]}"/>`
      nextInterval = false
      autoSlide = setInterval(passSlides, 5000)}
    , 300)
    }else if(i === images.length-2){
      i++
      setTimeout(function(){
      sliderEl.innerHTML = `<img class="fade" src="${images[i]}"/>`
      sliderEl2.innerHTML = `<img src="${images[0]}"/>`
      nextInterval = false
      autoSlide = setInterval(passSlides, 5000)}
    , 300)

    }
    else{
      i++
      setTimeout(function(){
      i=0
      sliderEl.innerHTML = `<img class="fade" src="${images[i]}"/>`
      sliderEl2.innerHTML = `<img src="${images[i+1]}"/>`
      nextInterval = false
      autoSlide = setInterval(passSlides, 5000)}
    , 300)

    }
  }
})

prevBtn.addEventListener("click", function(){
  if(nextInterval === false){
    clearInterval(autoSlide)
    nextInterval = true
    paused = false
    pauseBtn.textContent = "l l"
    displaySlideshowFastBackwards(sliderEl, sliderEl2, images)
    if(i !== 0){
      i--
      setTimeout(function(){
        sliderEl.innerHTML = `<img class="fade" src="${images[i]}"/>`
        sliderEl2.innerHTML = `<img src="${images[i+1]}"/>`
	nextInterval = false
        autoSlide = setInterval(passSlides, 5000)
      },300)
    }else{
      i = images.length - 1
      setTimeout(function(){
      sliderEl.innerHTML = `<img class="fade" src="${images[i]}"/>`
      sliderEl2.innerHTML = `<img src="${images[0]}"/>`
      nextInterval = false
      autoSlide = setInterval(passSlides, 5000)}
    , 300)

    }
  }
    
})



let navList = document.querySelector(".nav-list")
let navBar = document.querySelector(".navbar")
let menuOpened = false
let menuOpening = false

function toggleAnimation(x) {
  if(menuOpening === false){
    menuOpening = true
    setTimeout(function(){
      menuOpening = false
    }, 800)
    if(menuOpened === false){
    navBar.innerHTML = `				<ul class="nav-list">
	  				<li class="nav-item fade-menu-in"><a href="renderings.html" class="nav-link">Renderings</a></li>
	  				<li class="nav-item fade-menu-in"><a href="animations.html" class="nav-link">Animations</a></li>
	  				<li class="nav-item fade-menu-in"><a href="about.html" class="nav-link">About</a></li>
	  				<li class="nav-item fade-menu-in"><a href="mailto:asv@asvstudio.com" class="nav-link">Contact</a></li>
            <li class="nav-item fade-menu-in"><a href="index.html" class="nav-link">Home</a></li>
	  			</ul>`
    menuOpened = true
    } else{ 
      navBar.innerHTML = `				<ul class="nav-list">
	  				<li class="nav-item fade-menu-out"><a class="nav-link">Renderings</a></li>
	  				<li class="nav-item fade-menu-out"><a class="nav-link">Animations</a></li>
	  				<li class="nav-item fade-menu-out"><a class="nav-link">About</a></li>
	  				<li class="nav-item fade-menu-out"><a class="nav-link">Contact</a></li>
            <li class="nav-item fade-menu-out"><a class="nav-link">Home</a></li>
	  			</ul>`
      
      setTimeout(function(){
        navBar.innerHTML = ""
        menuOpened = false
      }, 800)
  }}}

