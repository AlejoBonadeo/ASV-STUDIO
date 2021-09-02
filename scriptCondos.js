let images = []
if(screen.width > 480){
images = [ "condos_img/condo01.jpg",
  "condos_img/condo02.jpg",
  "condos_img/condo03.jpg",
  "condos_img/condo04.jpg",
  "condos_img/condo05.jpg",
  "condos_img/condo06.jpg",
  "condos_img/condo07.jpg",
  "condos_img/condo08.jpg",
  "condos_img/condo09.jpg",
  "condos_img/condo10.jpg",
  "condos_img/condo11.jpg",
  "condos_img/condo12.jpg",
  "condos_img/condo13.jpg",
  "condos_img/condo14.jpg",
  "condos_img/condo15.jpg"
]} else{
  images = [ "condos_mobile/mcondo01.jpg",
  "condos_mobile/mcondo02.jpg",
  "condos_mobile/mcondo03.jpg",
  "condos_mobile/mcondo04.jpg",
  "condos_mobile/mcondo05.jpg",
  "condos_mobile/mcondo06.jpg",
  "condos_mobile/mcondo07.jpg",
  "condos_mobile/mcondo08.jpg",
  "condos_mobile/mcondo09.jpg",
  "condos_mobile/mcondo10.jpg",
  "condos_mobile/mcondo11.jpg",
  "condos_mobile/mcondo12.jpg",
  "condos_mobile/mcondo13.jpg",
  "condos_mobile/mcondo14.jpg",
  "condos_mobile/mcondo15.jpg"
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



