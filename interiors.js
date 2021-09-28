
let images = []
if(screen.width > 480){
images = [ "img/interiors_img/int_01.jpg",
  "img/interiors_img/int_02.jpg",
  "img/interiors_img/int_03.jpg",
  "img/interiors_img/int_04.jpg",
  "img/interiors_img/int_05.jpg",
  "img/interiors_img/int_06.jpg",
  "img/interiors_img/int_07.jpg",
  "img/interiors_img/int_08.jpg",
  "img/interiors_img/int_09.jpg",
  "img/interiors_img/int_10.jpg",
  "img/interiors_img/int_11.jpg",
  "img/interiors_img/int_12.jpg",
  "img/interiors_img/int_13.jpg",
  "img/interiors_img/int_14.jpg",
  "img/interiors_img/int_15.jpg"
]} else{
  images = [ "img/interiors_mobile/mint_01.jpg",
  "img/interiors_mobile/mint_02.jpg",
  "img/interiors_mobile/mint_03.jpg",
  "img/interiors_mobile/mint_04.jpg",
  "img/interiors_mobile/mint_05.jpg",
  "img/interiors_mobile/mint_06.jpg",
  "img/interiors_mobile/mint_07.jpg",
  "img/interiors_mobile/mint_08.jpg",
  "img/interiors_mobile/mint_09.jpg",
  "img/interiors_mobile/mint_10.jpg",
  "img/interiors_mobile/mint_11.jpg",
  "img/interiors_mobile/mint_12.jpg",
  "img/interiors_mobile/mint_13.jpg",
  "img/interiors_mobile/mint_14.jpg",
  "img/interiors_mobile/mint_15.jpg"
] 
}

let i = 0
const slider1 = document.querySelector("#slider")
const slider2 = document.querySelector("#slider-2")
const nextBtn = document.querySelector("#next-btn")
const prevBtn = document.querySelector("#prev-btn")
const pauseBtn = document.querySelector("#pause-btn")
let paused = false
let nextInterval = false

const passSlides = (speed = '') =>{
    slider1.innerHTML = `<img class="fade${speed}" src="${images[i]}"/>`
    slider2.innerHTML = (i !== images.length -1 ) ? `<img src="${images[i+1]}"/>` : `<img src="${images[0]}"/>`
}

const passSlidesBackwards = () => {
    slider1.innerHTML = `<img class="fade-fast" src="${images[i]}"/>`
    slider2.innerHTML = (i !== 0) ? `<img src="${images[i-1]}"/>` : `<img src="${images[images.length-1]}"/>`
}

const returnToNormal = (slider2Index) => {
    slider1.innerHTML = `<img class="fade" src="${images[i]}"/>`
    slider2.innerHTML = `<img src="${images[slider2Index]}"/>`
    nextInterval = false
    start = setInterval(()=>{
        i = i === images.length - 1 ? 0 : i + 1
        passSlides()}, 5000)
}

passSlides()

let start = setInterval(()=>{
    i = i === images.length - 1 ? 0 : i + 1
    passSlides()}, 5000)


pauseBtn.addEventListener("click", function(){
    if(!nextInterval){
        if(!paused){
            paused = true
            pauseBtn.innerHTML = `<i class="fas fa-play"></i>`
            clearInterval(start)
            slider1.innerHTML = `<img src="${images[i]}"/>`
            slider2.innerHTML = (i !== images.length -1 ) ? `<img src="${images[i+1]}"/>` : `<img src="${images[0]}"/>`
        }
        else{
            paused = false
            pauseBtn.textContent = "l l"
            if(i == images.length - 1){
                returnToNormal(0)
            }
            else{
                returnToNormal(i+1)
            }
        }
    }
})

nextBtn.addEventListener("click", function(){
    if(!nextInterval){
        clearInterval(start)
        nextInterval = true
        paused = false
        pauseBtn.textContent = "l l"
        passSlides('-fast')
        clearInterval(start)
        switch(i){
            case images.length - 1:
                setTimeout(function(){
                    i=0
                    returnToNormal(i+1)
                }, 300)
                break
            case images.lenght - 2 :
                i++
                setTimeout(function(){
                    returnToNormal(0)
            }, 300)
            break
            default:
                i++
                setTimeout(function(){
                returnToNormal(i+1)
            }, 300)
            break
        }
    }
})

prevBtn.addEventListener("click", function(){
    if(!nextInterval){
        clearInterval(start)
        nextInterval = true
        paused = false
        pauseBtn.textContent = "l l"
        passSlidesBackwards()
        if(i !== 0){
            i--
            setTimeout(function(){
                returnToNormal(i+1)
            },300)
        }
        else{
            i = images.length - 1
            setTimeout(function(){
                returnToNormal(0)
            }, 300)
        }
    }     
})

const navList = document.querySelector(".nav-list")
const navBar = document.querySelector(".navbar")
const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener('click', toggleAnimation)

function toggleAnimation() {
        hamburger.classList.toggle("change")
        navList.classList.toggle("show-list")
}

const about = document.getElementById('about')
const aboutContent = document.querySelector(".about-container")
const closeAbout = document.querySelector(".close")

function showAbout(){
    aboutContent.classList.toggle("show-about")
}

about.addEventListener('click', showAbout)
closeAbout.addEventListener('click', () =>{
    aboutContent.classList.remove("show-about")
})