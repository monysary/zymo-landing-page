const mainHeader = document.querySelectorAll('.animate-main-header')
const mainParagraph = document.querySelectorAll('.animate-main-paragraph')
const submitBtn = document.querySelector('#submit-btn')

// Function to animate element to appear from left when arrive on screen
const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-appear-left');
            headerObserver.unobserve(entry.target);
        } else {
            entry.target.classList.remove('animate-appear-left');
        }
    })
}, {
    threshold: 1
})

// Function to animate element to appear from top when arrive on screen
const paragraphObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-appear-top');
            paragraphObserver.unobserve(entry.target);
        } else {
            entry.target.classList.remove('animate-appear-top');
        }
    });
}, {
    threshold: 1
})

// Calling IntersectionObserver
mainHeader.forEach((element) => {
    headerObserver.observe(element)
})
mainParagraph.forEach((element) => {
    paragraphObserver.observe(element)
})

