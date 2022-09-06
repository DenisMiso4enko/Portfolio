
const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav__menu')
const body = document.body

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('stopscroll')
})

document.querySelectorAll('.nav__menu').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
    body.classList.remove('stopscroll')
}))



const sections = document.querySelectorAll('.section')
const links = document.querySelectorAll('.nav__link')
const menuList = document.querySelector('.nav__menu')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            links.forEach((link) => {
                if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                    link.classList.add('active')
                } else {
                    link.classList.remove('active')
                }
               
            })
        }
    })
}, {
    threshold: 0.3,
})
sections.forEach((section) => observer.observe(section))

menuList.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault()
        const id = e.target.getAttribute('href').replace('#', '')
        console.log(id);
        window.scrollTo({
            top: document.getElementById(id).offsetTop - 70,
            behavior: "smooth",
        })
    }
})
