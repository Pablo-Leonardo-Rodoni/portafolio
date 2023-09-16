import home from '../views/home.mjs';
import works from '../views/works.mjs';
import about from '../views/about.mjs'
import notFound from '../views/404.mjs'

let content = document.getElementById('root')


const routes = {
    '#/': home,
    '#/works': works,
    '#/about': about,
};

const loadPage = (route) => {
    const pageToLoad = routes[route] || notFound

    content.innerHTML = ''
    content.appendChild(pageToLoad())
}

const router = () => {
    const currentRoute = window.location.hash
    loadPage(currentRoute)
}

const loadHomePage = () => {
    window.location.hash = '#/'
    loadPage('#/')
}

loadHomePage()

window.addEventListener('hashchange', router)

export { router }
