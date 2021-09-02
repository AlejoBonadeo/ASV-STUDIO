const navList = document.querySelector(".nav-list")
const navBar = document.querySelector(".navbar")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener('click', toggleAnimation)

function toggleAnimation() {
        hamburger.classList.toggle("change")
        navList.classList.toggle("show-list")
}


  //FILTER

  const previews = [
    {
      id: 1,
      title: "pasio",
      category: "ARCHITECTURE",
      img: "animations/arch01_pasio.jpg"
    },
    {
      id: 2,
      title: "reel",
      category: "GOLF",
      img: "animations/golf01_reel.jpg"
    },
    {
      id: 3,
      title: "reelm",
      category: "MEDICINE",
      img: "animations/medic01_reel.jpg"
    },
    {
      id: 4,
      title: "hoover",
      category: "MOTION GRAPHICS",
      img: "animations/mogr01_hoover.jpg"
    },
    {
      id: 5,
      title: "directv",
      category: "ARCHITECTURE",
      img: "animations/arch02_directv.jpg"
    },
    {
      id: 6,
      title: "pinares",
      category: "GOLF",
      img: "animations/golf02_pinares.jpg"
    },
    {
      id: 7,
      title: "heart",
      category: "MEDICINE",
      img: "animations/medic02_heart.jpg"
    },
    {
      id: 8,
      title: "wind",
      category: "MOTION GRAPHICS",
      img: "animations/mogr02_wind.jpg"
    },
    {
      id: 9,
      title: "olivos",
      category: "ARCHITECTURE",
      img: "animations/arch03_olivos.jpg"
    },
    {
      id: 10,
      title: "medal",
      category: "GOLF",
      img: "animations/golf03_medal.jpg"
    },
    {
      id: 11,
      title: "aortic",
      category: "MEDICINE",
      img: "animations/medic03_aortic.jpg"
    },
    {
      id: 12,
      title: "sulphuric",
      category: "MOTION GRAPHICS",
      img: "animations/mogr03_sulphuric.jpg"
    },
    {
      id: 13,
      title: "concrete",
      category: "ARCHITECTURE",
      img: "animations/arch04_concrete.jpg"
    },
    {
      id: 14,
      title: "camboriu",
      category: "GOLF",
      img: "animations/golf04_camboriu.jpg"
    },
    {
      id: 15,
      title: "traumat",
      category: "MEDICINE",
      img: "animations/medic04_traumat.jpg"
    },
    {
      id: 16,
      title: "highway",
      category: "MOTION GRAPHICS",
      img: "animations/mogr04_highway.jpg"
    },
    {
      id: 17,
      title: "riach",
      category: "ARCHITECTURE",
      img: "animations/arch05_riach.jpg"
    },
    {
      id: 18,
      title: "ellerst",
      category: "GOLF",
      img: "animations/golf05_ellerst.jpg"
    },
    {
      id: 19,
      title: "fecund",
      category: "MEDICINE",
      img: "animations/medic05_fecund.jpg"
    },
    {
      id: 20,
      title: "mercedes",
      category: "MOTION GRAPHICS",
      img: "animations/mogr05_mercedes.jpg"
    },
    {
      id: 21,
      title: "ausol",
      category: "ARCHITECTURE",
      img: "animations/arch06_ausol.jpg"
    },
    {
      id: 22,
      title: "bleph",
      category: "MEDICINE",
      img: "animations/medic06_bleph.jpg"
    },
    {
      id: 23,
      title: "audi",
      category: "MOTION GRAPHICS",
      img: "animations/mogr06_audi.jpg"
    },
    {
      id: 24,
      title: "cancun",
      category: "ARCHITECTURE",
      img: "animations/arch07_cancun.jpg"
    },
    {
      id: 25,
      title: "pump",
      category: "MOTION GRAPHICS",
      img: "animations/mogr07_pump.jpg"
    },
    {
      id: 26,
      title: "petrochub",
      category: "ARCHITECTURE",
      img: "animations/arch08_petrochub.jpg"
    },
    {
      id: 27,
      title: "trevithick",
      category: "MOTION GRAPHICS",
      img: "animations/mogr08_trevithick.jpg"
    },
    {
      id: 28,
      title: "mart",
      category: "ARCHITECTURE",
      img: "animations/arch09_mart.jpg"
    },
    {
      id: 29,
      title: "ferretti",
      category: "MOTION GRAPHICS",
      img: "animations/mogr09_ferretti.jpg"
    },
    {
      id: 30,
      title: "velez",
      category: "ARCHITECTURE",
      img: "animations/arch10_velez.jpg"
    }
  ]

const box = document.querySelector(".center")
const filter = document.querySelector(".filter")
let prevent = "VIEW ALL"

window.addEventListener("DOMContentLoaded", function(){
  displayPreviewItems(previews)
  displayButtons()
})



function displayPreviewItems(array){
  let displayPreviews = array.map(function(item){
    return `<article>
    <a href="${item.title}.html"><img  class="fade-imgs" src="img/${item.img}" alt="${item.category}"></a>
    </article>`;
  })
  displayPreviews = displayPreviews.join("")
  box.innerHTML = displayPreviews;
}

function displayButtons(){
  const categories = ["VIEW ALL", ...new Set (previews.map(function(item){
    return item.category
  }))]
  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
  }).join("")
  filter.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
      const category = e.currentTarget.dataset.id
      const previewCategory = previews.filter(function(previewItem){
        return (previewItem.category === category);
      })
      if(prevent !== category){
      if(category === "VIEW ALL"){
        displayPreviewItems(previews)
        prevent = category
        
      } else{
        displayPreviewItems(previewCategory)
        prevent = category
      }}
    })
  })
}

const about = document.querySelector('.about')
const aboutContent = document.querySelector(".about-container")
const closeAbout = document.querySelector(".close")

function showAbout(){
    aboutContent.classList.toggle("show-about")
}

about.addEventListener('click', showAbout)
closeAbout.addEventListener('click', () =>{
    aboutContent.classList.remove("show-about")
})