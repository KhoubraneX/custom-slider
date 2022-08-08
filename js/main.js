let boxSlider = document.querySelector(".box-slider")
let swiperWrapper = document.querySelector(".swiper-wrapper")
let sliders = document.querySelectorAll(".box-slider .slider")
let nextBtn = document.querySelector(".arrow .next")
let preBtn = document.querySelector(".arrow .pre")

function sliderRun() {
    // get width each of slider
    let marginLeftSlider = parseInt(getComputedStyle(sliders[0]).marginRight)
    let sliderWidth = (parseInt(getComputedStyle(sliders[0]).width) + marginLeftSlider)
    
    // how many slider i want to show it in box-slider
    let boxSliderWidth = parseInt(getComputedStyle(boxSlider).width)
    let sliderElemntInPage = boxSliderWidth / sliderWidth
    
    // width of all sliders
    let swiperWrapperWidth = parseInt(getComputedStyle(swiperWrapper).width)
    
    // how many steps we have to scrollX
    let nextCounter = Math.trunc((swiperWrapperWidth / boxSliderWidth) - 1)
    let nextCounterCount = 0
    
    // sliders not include on the box
    let noTinclude = sliders.length - ((nextCounter + 1) * sliderElemntInPage)
    let noTincludeStatus = false
    
    // eventclick
    nextBtn.addEventListener("click", function () {
        if (nextCounterCount < nextCounter) {
            nextCounterCount++
            swiperWrapper.setAttribute("style", `transform:translateX(-${boxSliderWidth * nextCounterCount}px);`)
        } else if (noTinclude != 0) {
            swiperWrapper.setAttribute("style", `transform:translateX(-${(boxSliderWidth * nextCounterCount) + (noTinclude * sliderWidth)}px);`)
            noTincludeStatus = true
        }
    })
    
    preBtn.addEventListener("click", function () {
        if (nextCounterCount > 0 && noTincludeStatus == false) {
            nextCounterCount--
            swiperWrapper.setAttribute("style", `transform:translateX(-${boxSliderWidth * nextCounterCount}px);`)
        } else if (noTinclude != 0) {
            swiperWrapper.setAttribute("style", `transform:translateX(-${(boxSliderWidth * nextCounterCount) + (noTinclude * sliderWidth) - (noTinclude * sliderWidth)}px);`)
            noTincludeStatus = false
        }
    })
}
sliderRun()

window.addEventListener("resize" , ()=> {
    sliderRun()
})