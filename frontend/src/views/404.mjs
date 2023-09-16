export default () => {

    const notfound = `
    
    <h1>not found</h1>
    <p>not found page</p>
    
    `;

    const notFoundEl = document.createElement('div')
    notFoundEl.innerHTML = notfound

    return notFoundEl
}