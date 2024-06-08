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

//===========================================================================================
// TODO: Refactor
//===========================================================================================
export let currIndex = null;
export function getIndexOfClickedCardAndOpenModal() {
    const cards = document.getElementsByClassName('project');
    const cardPressed = e => {
        let index = e.currentTarget.id;
        currIndex = index.split("-").pop()
        displayProjectDialog(currIndex)
    }
    for (let card of cards) {
        card.addEventListener("click", cardPressed);
    }
};
export function getIdOfClickedElementAndDelete() {
    const buttons = document.getElementsByClassName('delete-project-button');
    const buttonPressed = e => {
        let id = e.currentTarget.id;
        id = id.split("-").pop()
        deleteProject(id)
    }
    for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
    }
};
export function getIdOfAndDeleteNote() {
    const buttons = document.getElementsByClassName('delete-note-button');
    const buttonPressed = e => {
        let id = e.currentTarget.id;
        id = id.split("-").pop()
        deleteNote(id)
    }
    for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
    }
}
//===========================================================================================
//===========================================================================================
function deleteProject(id) {
    const item = projects[id].title
    removeFromLocalStorage(item)
    projects.splice(id, 1)
    displayProjectList()
};
function deleteNote(id) {
    const array = projects[currIndex].notes;
    array.splice(id, 1)
    displayNotes()
}

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
    localStorage.removeItem(`${projects[currIndex].title}`)
    addToLocalStorage(`${projects[currIndex].title}`, projects[currIndex])
    displayNotes()
}
document.getElementById('submitNoteBtn').addEventListener('click', () => {
    addNote()
})


export function checkForTitleChange() {
    const titleInput = document.getElementById('project-title');
    if (titleInput.value !== projects[currIndex].title) {
        const keyToRemove = projects[currIndex].title;
        projects[currIndex].title = titleInput.value;
        addToLocalStorage(`${projects[currIndex].title}`, projects[currIndex])
        localStorage.removeItem(`${keyToRemove}`)
        displayProjectList()
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
}
function removeFromLocalStorage(item) {
    localStorage.removeItem(item);
}

// export function listenForDelete() {
// }

// Get current date
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
// Set min attribute on inputs with type = date to today
today = yyyy + '-' + mm + '-' + dd;
const datePickers = document.querySelectorAll('input[type=date]');
for (const datePicker of datePickers) {
    datePicker.min = today;
}