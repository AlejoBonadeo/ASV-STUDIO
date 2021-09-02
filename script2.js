let images = []
if(screen.width > 480){
    images = [
        "img/home_img/home_01.jpg",
        "img/home_img/home_02.jpg",
        "img/home_img/home_03.jpg",
        "img/home_img/home_04.jpg",
        "img/home_img/home_05.jpg",
        "img/home_img/home_06.jpg",
        "img/home_img/home_07.jpg",
        "img/home_img/home_08.jpg",
        "img/home_img/home_09.jpg",
        "img/home_img/home_10.jpg",
        "img/home_img/home_11.jpg",
        "img/home_img/home_12.jpg",
        "img/home_img/home_13.jpg",
        "img/home_img/home_14.jpg",
        "img/home_img/home_15.jpg",
        "img/home_img/home_16.jpg",
        "img/home_img/home_17.jpg",
        "img/home_img/home_18.jpg",
        "img/home_img/home_19.jpg",
        "img/home_img/home_20.jpg",
        "img/home_img/home_21.jpg",
        "img/home_img/home_22.jpg",
        "img/home_img/home_23.jpg",
        "img/home_img/home_24.jpg",
        "img/home_img/home_25.jpg",
        "img/home_img/home_26.jpg",
        "img/home_img/home_27.jpg",
        "img/home_img/home_28.jpg",
        "img/home_img/home_29.jpg",
        "img/home_img/home_30.jpg"
    ]
}
else{
    images = [
        "img/home_mobile/mhome_01.jpg",
        "img/home_mobile/mhome_02.jpg",
        "img/home_mobile/mhome_03.jpg",
        "img/home_mobile/mhome_04.jpg",
        "img/home_mobile/mhome_05.jpg",
        "img/home_mobile/mhome_06.jpg",
        "img/home_mobile/mhome_07.jpg",
        "img/home_mobile/mhome_08.jpg",
        "img/home_mobile/mhome_09.jpg",
        "img/home_mobile/mhome_10.jpg",
        "img/home_mobile/mhome_11.jpg",
        "img/home_mobile/mhome_12.jpg",
        "img/home_mobile/mhome_13.jpg",
        "img/home_mobile/mhome_14.jpg",
        "img/home_mobile/mhome_15.jpg",
        "img/home_mobile/mhome_16.jpg",
        "img/home_mobile/mhome_17.jpg",
        "img/home_mobile/mhome_18.jpg",
        "img/home_mobile/mhome_19.jpg",
        "img/home_mobile/mhome_20.jpg",
        "img/home_mobile/mhome_21.jpg",
        "img/home_mobile/mhome_22.jpg",
        "img/home_mobile/mhome_23.jpg",
        "img/home_mobile/mhome_24.jpg",
        "img/home_mobile/mhome_25.jpg",
        "img/home_mobile/mhome_26.jpg",
        "img/home_mobile/mhome_27.jpg",
        "img/home_mobile/mhome_28.jpg",
        "img/home_mobile/mhome_29.jpg",
        "img/home_mobile/mhome_30.jpg"
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
            case images.length-2:
                setTimeout(function(){
                    i++
                    returnToNormal(0)
            }, 300)
            break
            default:
                i++
                setTimeout(function(){
                returnToNormal(i+1)
            }
            , 300)
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

function toggleAnimation() {
    hamburger.classList.toggle("change")
    navList.classList.toggle("show-list")
}

hamburger.addEventListener('click', toggleAnimation)

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