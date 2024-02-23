import { displayProjectList, displayProjectDialog } from "./dom.js";
import "../css/style.css"

export let projects = [];


class Project {
    constructor(title, desc, priority, dueDate) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = [new Note('Test note', 'Text'), new Note('Test note 2', 'Text', 'Medium')];
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
    addProjectPriority.value = null;
    addProjectDueDate.value = null;
    projectDialog.showModal()
})
const submitBtn = document.getElementById('submitProjectBtn')
submitBtn.addEventListener('click', () => {
    const newProject = new Project(addProjectTitle.value, addProjectDesc.value, addProjectPriority.value, addProjectDueDate.value, false)
    const title = newProject.title
    addToLocalStorage(title, newProject)
    getFromLocalStorage()
})

let currIndex = null;
export function getIndexOfClickedCardAndOpenModal() {
    const cards = document.getElementsByClassName('project-card');
    const cardPressed = e => {
        let index = e.currentTarget.id;  // Get ID of Clicked Element
        currIndex = index
        displayProjectDialog(currIndex)
    }
    for (let card of cards) {
        card.addEventListener("click", cardPressed);
    }
};


export function drawAddNoteDialog(currIndex) {
    document.getElementById('addNoteButton').addEventListener('click', () => {
        addNoteTitle.value = '';
        addNoteText.value = '';
        addNotePriority.value = '';
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

export function displayNotes() {
    const noteContainer = document.getElementById('note-list');
    noteContainer.textContent = '';
    for (let i = 0; i < projects[currIndex].notes.length; i++) {
        const note = projects[currIndex].notes[i];
        const noteLi = document.createElement('li');
        noteLi.setAttribute('class', 'card')
        const h2 = document.createElement('h2');
        h2.textContent = `${note.title}`;
        const p = document.createElement('p');
        p.textContent = `${note.text}`;
        const div = document.createElement('div');
        div.setAttribute('id', 'note-priority');
        div.textContent = `Priority: ${note.priority}`;
        noteLi.appendChild(h2)
        noteLi.appendChild(p)
        noteLi.appendChild(div)
        noteContainer.appendChild(noteLi);
        if (!note.priority) {
            const notePriority = document.getElementById('note-priority');
            notePriority.textContent = '';
        }
    }
}
export function checkForTitleChange(index) {
    const titleInput = document.getElementById('project-title');
    if (titleInput.value !== projects[currIndex].title) {
        projects[index].title = titleInput.value;
        displayProjectList();
    }
}

function addToLocalStorage(title, project) {
    localStorage.setItem(`${title}`, JSON.stringify(project))
    displayProjectList()
}
export function getFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        projects.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
}