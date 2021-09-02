let images = []
if(screen.width > 480){
images = [ "img/yachts_img/yacht_01.jpg",
  "img/yachts_img/yacht_02.jpg",
  "img/yachts_img/yacht_03.jpg",
  "img/yachts_img/yacht_04.jpg",
  "img/yachts_img/yacht_05.jpg",
  "img/yachts_img/yacht_06.jpg",
  "img/yachts_img/yacht_07.jpg",
  "img/yachts_img/yacht_08.jpg",
  "img/yachts_img/yacht_09.jpg",
  "img/yachts_img/yacht_10.jpg",
  "img/yachts_img/yacht_11.jpg",
  "img/yachts_img/yacht_12.jpg",
  "img/yachts_img/yacht_13.jpg",
  "img/yachts_img/yacht_14.jpg",
  "img/yachts_img/yacht_15.jpg",
  "img/yachts_img/yacht_16.jpg",
  "img/yachts_img/yacht_17.jpg",
  "img/yachts_img/yacht_18.jpg",
  "img/yachts_img/yacht_19.jpg",
  "img/yachts_img/yacht_20.jpg",
  "img/yachts_img/yacht_21.jpg",
  "img/yachts_img/yacht_22.jpg",
  "img/yachts_img/yacht_23.jpg",
  "img/yachts_img/yacht_24.jpg",
  "img/yachts_img/yacht_25.jpg",
  "img/yachts_img/yacht_26.jpg",
  "img/yachts_img/yacht_27.jpg",
  "img/yachts_img/yacht_28.jpg",
  "img/yachts_img/yacht_29.jpg",
  "img/yachts_img/yacht_30.jpg",
]} else{
  images = [ "img/yachts_mobile/myacht_01.jpg",
  "img/yachts_mobile/myacht_02.jpg",
  "img/yachts_mobile/myacht_03.jpg",
  "img/yachts_mobile/myacht_04.jpg",
  "img/yachts_mobile/myacht_05.jpg",
  "img/yachts_mobile/myacht_06.jpg",
  "img/yachts_mobile/myacht_07.jpg",
  "img/yachts_mobile/myacht_08.jpg",
  "img/yachts_mobile/myacht_09.jpg",
  "img/yachts_mobile/myacht_10.jpg",
  "img/yachts_mobile/myacht_11.jpg",
  "img/yachts_mobile/myacht_12.jpg",
  "img/yachts_mobile/myacht_13.jpg",
  "img/yachts_mobile/myacht_14.jpg",
  "img/yachts_mobile/myacht_15.jpg",
  "img/yachts_mobile/myacht_16.jpg",
  "img/yachts_mobile/myacht_17.jpg",
  "img/yachts_mobile/myacht_18.jpg",
  "img/yachts_mobile/myacht_19.jpg",
  "img/yachts_mobile/myacht_20.jpg",
  "img/yachts_mobile/myacht_21.jpg",
  "img/yachts_mobile/myacht_22.jpg",
  "img/yachts_mobile/myacht_23.jpg",
  "img/yachts_mobile/myacht_24.jpg",
  "img/yachts_mobile/myacht_25.jpg",
  "img/yachts_mobile/myacht_26.jpg",
  "img/yachts_mobile/myacht_27.jpg",
  "img/yachts_mobile/myacht_28.jpg",
  "img/yachts_mobile/myacht_29.jpg",
  "img/yachts_mobile/myacht_30.jpg"
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