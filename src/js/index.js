import { displayProjectList, displayProjectDialog, displayNotes } from "./dom.js";
import "../css/style.css"

export let projects = [];


class Project {
    constructor(title, desc, priority, dueDate) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = [];
    }
    get title() {
        return super.title;
    }
    set title(title) {
        super.title = title
    }
};
class Note {
    constructor(title, text, priority) {
        this.title = title;
        this.text = text;
        this.priority = priority;
    }
}
displayProjectList()
const projectDialog = document.getElementById('addProjectDialog');
document.getElementById('addProjectBtn').addEventListener('click', () => {
    addProjectTitle.value = '';
    addProjectDesc.value = '';
    addProjectPriority.value = 'none';
    addProjectDueDate.value = null;
    projectDialog.showModal()
})
const submitBtn = document.getElementById('submitProjectBtn')
submitBtn.addEventListener('click', () => {
    if (addProjectTitle.value === '') {
        addProjectTitle.setCustomValidity('Please enter a title');
        addProjectTitle.reportValidity(); return
    }
    addProjectTitle.setCustomValidity('');
    const newProject = new Project(addProjectTitle.value, addProjectDesc.value, addProjectPriority.value, addProjectDueDate.value)
    const title = newProject.title
    addToLocalStorage(title, newProject)
    displayProjectList()
})

export let currIndex = null;
export function getIndexOfClickedCardAndOpenModal() {
    const cards = document.getElementsByClassName('project');
    const cardPressed = e => {
        let index = e.currentTarget.id;  // Get ID of Clicked Element
        console.log(index.split("-").pop())
        currIndex = index.split("-").pop()
        displayProjectDialog(currIndex)
    }
    for (let card of cards) {
        card.addEventListener("click", cardPressed);
    }
};
export function getIdOfClickedElementAndDelete() {
    const buttons = document.getElementsByClassName('delete-button');
    const buttonPressed = e => {
        let id = e.currentTarget.id;  // Get ID of Clicked Element
        deleteElement(id)
        console.log('id: ', id)
        console.log(projects)
        displayProjectList()
    }
    for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
    }
};

function deleteElement(id) {
    const item = projects[id].title
    console.log('Delete item:', item)
    removeFromLocalStorage(item)
    projects.splice(id, 1)
};

export function drawAddNoteDialog(currIndex) {
    document.getElementById('addNoteButton').addEventListener('click', () => {
        addNoteTitle.value = '';
        addNoteText.value = '';
        addNotePriority.value = 'none';
        const d = document.getElementById('addNoteDialog')
        d.showModal()

    })
}
function addNote() {
    projects[currIndex].notes.push(new Note(addNoteTitle.value, addNoteText.value, addNotePriority.value))
    displayNotes()
}
document.getElementById('submitNoteBtn').addEventListener('click', () => {
    addNote()
})


export function checkForTitleChange(index) {
    const titleInput = document.getElementById('project-title');
    if (titleInput.value !== projects[currIndex].title) {
        const keyToRemove = projects[currIndex].title;
        projects[index].title = titleInput.value;
        addToLocalStorage(`${projects[index].title}`, projects[index])
        localStorage.removeItem(`${keyToRemove}`)
        displayProjectList()
        console.log('at titlechange: ', localStorage)
    }
}

function addToLocalStorage(title, project) {
    localStorage.setItem(`${title}`, JSON.stringify(project))
}
export function getFromLocalStorage() {
    projects = [];
    for (let i = 0; i < localStorage.length; i++) {
        projects.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    console.log('localStorage: ', localStorage)
}
function removeFromLocalStorage(item) {
    console.log('key:', localStorage.getItem(item))
    console.log('key:', item, typeof item)
    localStorage.removeItem(item);
}

// export function listenForDelete() {
//     document.getElementsByClassName('delete-button').addEventListener('click', () => { console.log('yipp') })
// }