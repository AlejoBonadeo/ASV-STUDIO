
let images = []
  if(screen.width > 480){
images = [ "home_img/home_01.jpg",
  "home_img/home_02.jpg",
  "home_img/home_03.jpg",
  "home_img/home_04.jpg",
  "home_img/home_05.jpg",
  "home_img/home_06.jpg",
  "home_img/home_07.jpg",
  "home_img/home_08.jpg",
  "home_img/home_09.jpg",
  "home_img/home_10.jpg",
  "home_img/home_11.jpg",
  "home_img/home_12.jpg",
  "home_img/home_13.jpg",
  "home_img/home_14.jpg",
  "home_img/home_15.jpg",
  "home_img/home_16.jpg",
  "home_img/home_17.jpg",
  "home_img/home_18.jpg",
  "home_img/home_19.jpg",
  "home_img/home_20.jpg",
  "home_img/home_21.jpg",
  "home_img/home_22.jpg",
  "home_img/home_23.jpg",
  "home_img/home_24.jpg",
  "home_img/home_25.jpg",
  "home_img/home_26.jpg",
  "home_img/home_27.jpg",
  "home_img/home_28.jpg",
  "home_img/home_29.jpg",
  "home_img/home_30.jpg"
]} else{
  images = [ "home_mobile/mhome_01.jpg",
  "home_mobile/mhome_02.jpg",
  "home_mobile/mhome_03.jpg",
  "home_mobile/mhome_04.jpg",
  "home_mobile/mhome_05.jpg",
  "home_mobile/mhome_06.jpg",
  "home_mobile/mhome_07.jpg",
  "home_mobile/mhome_08.jpg",
  "home_mobile/mhome_09.jpg",
  "home_mobile/mhome_10.jpg",
  "home_mobile/mhome_11.jpg",
  "home_mobile/mhome_12.jpg",
  "home_mobile/mhome_13.jpg",
  "home_mobile/mhome_14.jpg",
  "home_mobile/mhome_15.jpg",
  "home_mobile/mhome_16.jpg",
  "home_mobile/mhome_17.jpg",
  "home_mobile/mhome_18.jpg",
  "home_mobile/mhome_19.jpg",
  "home_mobile/mhome_20.jpg",
  "home_mobile/mhome_21.jpg",
  "home_mobile/mhome_22.jpg",
  "home_mobile/mhome_23.jpg",
  "home_mobile/mhome_24.jpg",
  "home_mobile/mhome_25.jpg",
  "home_mobile/mhome_26.jpg",
  "home_mobile/mhome_27.jpg",
  "home_mobile/mhome_28.jpg",
  "home_mobile/mhome_29.jpg",
  "home_mobile/mhome_30.jpg"
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
	  			</ul>`
    menuOpened = true
    } else{ 
      navBar.innerHTML = `				<ul class="nav-list">
	  				<li class="nav-item fade-menu-out"><a class="nav-link">Renderings</a></li>
	  				<li class="nav-item fade-menu-out"><a class="nav-link">Animations</a></li>
	  				<li class="nav-item fade-menu-out"><a class="nav-link">About</a></li>
	  				<li class="nav-item fade-menu-out"><a class="nav-link">Contact</a></li>
	  			</ul>`
      
      setTimeout(function(){
        navBar.innerHTML = ""
        menuOpened = false
      }, 800)
  }}}

