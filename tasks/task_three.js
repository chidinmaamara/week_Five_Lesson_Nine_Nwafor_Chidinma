let arrayOfObjects = [
    {
        firstName : 'Nwokoye', 
        lastName : 'Chioma',
        complexion : 'fair',
        occupation : 'teaching'
    },
    {
        firstName : 'Okoye', 
        lastName : 'Ozioma',
        complexion : 'fair',
        occupation : 'web designer'
    },
    {
        firstName : 'Nwafor', 
        lastName : 'Kene',
        complexion : 'dark',
        occupation : 'politician'
    },
    {
        firstName : 'Anayo', 
        lastName : 'Kelue',
        complexion : 'dark',
        occupation : 'yahoo yahoo'
    }
]
const body = document.querySelector('body')

arrayOfObjects.forEach((item, index) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <h2>User ${index + 1}</h2>
    <p> firstName: ${item.firstName}</p>
    <p> lastName: ${item.lastName}</p> 
    <p> complexion: ${item.complexion}</p> 
    <p> occupation: ${item.occupation}</p> 
     `
     body.appendChild(div)
})