let images = []
if(screen.width > 480){
images = [ "img/houses_img/hous01.jpg",
  "img/houses_img/hous02.jpg",
  "img/houses_img/hous03.jpg",
  "img/houses_img/hous04.jpg",
  "img/houses_img/hous05.jpg",
  "img/houses_img/hous06.jpg",
  "img/houses_img/hous07.jpg",
  "img/houses_img/hous08.jpg",
  "img/houses_img/hous09.jpg",
  "img/houses_img/hous10.jpg",
  "img/houses_img/hous11.jpg",
  "img/houses_img/hous12.jpg",
  "img/houses_img/hous13.jpg",
  "img/houses_img/hous14.jpg",
  "img/houses_img/hous15.jpg",
  "img/houses_img/hous16.jpg",
  "img/houses_img/hous17.jpg",
  "img/houses_img/hous18.jpg",
  "img/houses_img/hous19.jpg",
  "img/houses_img/hous20.jpg",
  "img/houses_img/hous21.jpg",
  "img/houses_img/hous22.jpg",
  "img/houses_img/hous23.jpg",
  "img/houses_img/hous24.jpg",
  "img/houses_img/hous25.jpg",
  "img/houses_img/hous26.jpg",
  "img/houses_img/hous27.jpg",
  "img/houses_img/hous28.jpg",
  "img/houses_img/hous29.jpg",
  "img/houses_img/hous30.jpg",
]} else{
  images = [ "img/houses_mobile/mhous01.jpg",
  "img/houses_mobile/mhous02.jpg",
  "img/houses_mobile/mhous03.jpg",
  "img/houses_mobile/mhous04.jpg",
  "img/houses_mobile/mhous05.jpg",
  "img/houses_mobile/mhous06.jpg",
  "img/houses_mobile/mhous07.jpg",
  "img/houses_mobile/mhous08.jpg",
  "img/houses_mobile/mhous09.jpg",
  "img/houses_mobile/mhous10.jpg",
  "img/houses_mobile/mhous11.jpg",
  "img/houses_mobile/mhous12.jpg",
  "img/houses_mobile/mhous13.jpg",
  "img/houses_mobile/mhous14.jpg",
  "img/houses_mobile/mhous15.jpg",
  "img/houses_mobile/mhous16.jpg",
  "img/houses_mobile/mhous17.jpg",
  "img/houses_mobile/mhous18.jpg",
  "img/houses_mobile/mhous19.jpg",
  "img/houses_mobile/mhous20.jpg",
  "img/houses_mobile/mhous21.jpg",
  "img/houses_mobile/mhous22.jpg",
  "img/houses_mobile/mhous23.jpg",
  "img/houses_mobile/mhous24.jpg",
  "img/houses_mobile/mhous25.jpg",
  "img/houses_mobile/mhous26.jpg",
  "img/houses_mobile/mhous27.jpg",
  "img/houses_mobile/mhous28.jpg",
  "img/houses_mobile/mhous29.jpg"
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
            pauseBtn.textContent = "▷"
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