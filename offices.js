let images = []
if(screen.width > 480){
images = [ "img/office_img/off01.jpg",
  "img/office_img/off02.jpg",
  "img/office_img/off03.jpg",
  "img/office_img/off04.jpg",
  "img/office_img/off05.jpg",
  "img/office_img/off06.jpg",
  "img/office_img/off07.jpg",
  "img/office_img/off08.jpg",
  "img/office_img/off09.jpg",
  "img/office_img/off10.jpg",
  "img/office_img/off11.jpg",
  "img/office_img/off12.jpg",
  "img/office_img/off13.jpg",
  "img/office_img/off14.jpg",
  "img/office_img/off15.jpg"
]} else{
  images = [ "img/office_mobile/moff01.jpg",
  "img/office_mobile/moff02.jpg",
  "img/office_mobile/moff03.jpg",
  "img/office_mobile/moff04.jpg",
  "img/office_mobile/moff05.jpg",
  "img/office_mobile/moff06.jpg",
  "img/office_mobile/moff07.jpg",
  "img/office_mobile/moff08.jpg",
  "img/office_mobile/moff09.jpg",
  "img/office_mobile/moff10.jpg",
  "img/office_mobile/moff11.jpg",
  "img/office_mobile/moff12.jpg",
  "img/office_mobile/moff13.jpg",
  "img/office_mobile/moff14.jpg",
  "img/office_mobile/moff15.jpg"
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