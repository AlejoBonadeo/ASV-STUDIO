let images = []
if(screen.width > 480){
images = [ "houses_img/hous01.jpg",
  "houses_img/hous02.jpg",
  "houses_img/hous03.jpg",
  "houses_img/hous04.jpg",
  "houses_img/hous05.jpg",
  "houses_img/hous06.jpg",
  "houses_img/hous07.jpg",
  "houses_img/hous08.jpg",
  "houses_img/hous09.jpg",
  "houses_img/hous10.jpg",
  "houses_img/hous11.jpg",
  "houses_img/hous12.jpg",
  "houses_img/hous13.jpg",
  "houses_img/hous14.jpg",
  "houses_img/hous15.jpg",
  "houses_img/hous16.jpg",
  "houses_img/hous17.jpg",
  "houses_img/hous18.jpg",
  "houses_img/hous19.jpg",
  "houses_img/hous20.jpg",
  "houses_img/hous21.jpg",
  "houses_img/hous22.jpg",
  "houses_img/hous23.jpg",
  "houses_img/hous24.jpg",
  "houses_img/hous25.jpg",
  "houses_img/hous26.jpg",
  "houses_img/hous27.jpg",
  "houses_img/hous28.jpg",
  "houses_img/hous29.jpg",
  "houses_img/hous30.jpg",
]} else{
  images = [ "houses_mobile/mhous01.jpg",
  "houses_mobile/mhous02.jpg",
  "houses_mobile/mhous03.jpg",
  "houses_mobile/mhous04.jpg",
  "houses_mobile/mhous05.jpg",
  "houses_mobile/mhous06.jpg",
  "houses_mobile/mhous07.jpg",
  "houses_mobile/mhous08.jpg",
  "houses_mobile/mhous09.jpg",
  "houses_mobile/mhous10.jpg",
  "houses_mobile/mhous11.jpg",
  "houses_mobile/mhous12.jpg",
  "houses_mobile/mhous13.jpg",
  "houses_mobile/mhous14.jpg",
  "houses_mobile/mhous15.jpg",
  "houses_mobile/mhous16.jpg",
  "houses_mobile/mhous17.jpg",
  "houses_mobile/mhous18.jpg",
  "houses_mobile/mhous19.jpg",
  "houses_mobile/mhous20.jpg",
  "houses_mobile/mhous21.jpg",
  "houses_mobile/mhous22.jpg",
  "houses_mobile/mhous23.jpg",
  "houses_mobile/mhous24.jpg",
  "houses_mobile/mhous25.jpg",
  "houses_mobile/mhous26.jpg",
  "houses_mobile/mhous27.jpg",
  "houses_mobile/mhous28.jpg",
  "houses_mobile/mhous29.jpg"
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