const CODE_CONTAINERS = document.getElementsByTagName("pre")
const BODY = document.body

// add buttons to all code containers
for (let container of CODE_CONTAINERS) {
    addButton(container)
}

// adds the button with functionality to the container
function addButton(container) {
    let text = container.firstChild.textContent
    let button = document.createElement("button")

    // add the functionality and set the style
    button.addEventListener("click", () => navigator.clipboard.writeText(text))
    setButtonStyle(button, container.getBoundingClientRect())

    // adds a newline for spacing, add the button
    container.innerHTML += "<br>\n"
    container.appendChild(button)
}

// sets the style for the button and position with the bounding box of the container
function setButtonStyle(button, boundingBox) {
    button.innerHTML = "Copy"
    button.classList.add("__so-copy-button")

    // using stack overflow style
    button.classList.add("s-btn")
    button.classList.add("s-btn__primary")
}
