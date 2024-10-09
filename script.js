const inputEL = (document.getElementsByClassName ('app__controls-input')) [0]
const btnEl = (document.getElementsByClassName('app_controls-button'))[0]
const listEl = (document.getElementsByClassName('app_list'))[0]

const data = [
    {
        id: 1,
        text: 'Some text', 
        isDone: false
    }
]

function createTask (someText){
    const root = document.createElement ('div')
    root.classList.add('app_list-item')
    
    if(ObjectData.isDone) {
        root.classList.add(app_list-item_done)
    }


    const input = document.createElement('input')
    input.classList.add('app_list-checkbox')
    input.type = 'checkbox'

    const txt = document.createElement('p')
    txt.classList.add('app_list-item-text')
    txt.innerText = someText

    const btn = document.createElement('button')
    btn.classList.add('app_list-btn')

    const img = document.createElement
    img.src = '/'
    img.alt = 'trash'

    btn.appendChild(img)

    root.appendChild(input)
    root.appendChild(txt)
    root.appendChild(btn)
    return root
}

btnEl.addEventListener('click',()=> {
    const textValue = inputEL.value 
    const taskEl = createTask (textValue)
    listEl.appendChild(taskEl)
    inputEL.value = ''
})


createTask()