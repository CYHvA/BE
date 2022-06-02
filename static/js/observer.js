const allAnimationItems = document.querySelectorAll('.blocks')

const options = {
    rootMargin: "20px",
    threshold: 0.2
}

function callbackFunction(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade')   
        }
    })
}

const observer = new IntersectionObserver(callbackFunction, options)

allAnimationItems.forEach(item => {
    //observeer het element
    observer.observe(item)
})

// const scriptSrc = document.querySelector("script-src-elem")

// if (scriptSrc = true) {
//   console.log("true")
// }

// if (scriptSrc = false) {
//   console.log("false")
// }