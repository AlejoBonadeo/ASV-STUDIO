let images = []
if(screen.width > 480){
images = [ "yachts_img/yacht_01.jpg",
  "yachts_img/yacht_02.jpg",
  "yachts_img/yacht_03.jpg",
  "yachts_img/yacht_04.jpg",
  "yachts_img/yacht_05.jpg",
  "yachts_img/yacht_06.jpg",
  "yachts_img/yacht_07.jpg",
  "yachts_img/yacht_08.jpg",
  "yachts_img/yacht_09.jpg",
  "yachts_img/yacht_10.jpg",
  "yachts_img/yacht_11.jpg",
  "yachts_img/yacht_12.jpg",
  "yachts_img/yacht_13.jpg",
  "yachts_img/yacht_14.jpg",
  "yachts_img/yacht_15.jpg",
  "yachts_img/yacht_16.jpg",
  "yachts_img/yacht_17.jpg",
  "yachts_img/yacht_18.jpg",
  "yachts_img/yacht_19.jpg",
  "yachts_img/yacht_20.jpg",
  "yachts_img/yacht_21.jpg",
  "yachts_img/yacht_22.jpg",
  "yachts_img/yacht_23.jpg",
  "yachts_img/yacht_24.jpg",
  "yachts_img/yacht_25.jpg",
  "yachts_img/yacht_26.jpg",
  "yachts_img/yacht_27.jpg",
  "yachts_img/yacht_28.jpg",
  "yachts_img/yacht_29.jpg",
  "yachts_img/yacht_30.jpg",
]} else{
  images = [ "yachts_mobile/myacht_01.jpg",
  "yachts_mobile/myacht_02.jpg",
  "yachts_mobile/myacht_03.jpg",
  "yachts_mobile/myacht_04.jpg",
  "yachts_mobile/myacht_05.jpg",
  "yachts_mobile/myacht_06.jpg",
  "yachts_mobile/myacht_07.jpg",
  "yachts_mobile/myacht_08.jpg",
  "yachts_mobile/myacht_09.jpg",
  "yachts_mobile/myacht_10.jpg",
  "yachts_mobile/myacht_11.jpg",
  "yachts_mobile/myacht_12.jpg",
  "yachts_mobile/myacht_13.jpg",
  "yachts_mobile/myacht_14.jpg",
  "yachts_mobile/myacht_15.jpg",
  "yachts_mobile/myacht_16.jpg",
  "yachts_mobile/myacht_17.jpg",
  "yachts_mobile/myacht_18.jpg",
  "yachts_mobile/myacht_19.jpg",
  "yachts_mobile/myacht_20.jpg",
  "yachts_mobile/myacht_21.jpg",
  "yachts_mobile/myacht_22.jpg",
  "yachts_mobile/myacht_23.jpg",
  "yachts_mobile/myacht_24.jpg",
  "yachts_mobile/myacht_25.jpg",
  "yachts_mobile/myacht_26.jpg",
  "yachts_mobile/myacht_27.jpg",
  "yachts_mobile/myacht_28.jpg",
  "yachts_mobile/myacht_29.jpg",
  "yachts_mobile/myacht_30.jpg"
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