import { displayProjectList, updateDialogContent } from "./dom.js";

export let projects = []

class Project {
    constructor(title, desc, priority, dueDate) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDisplayed = false;
        this.notes = [];
    }
    get title() {
        return super.title;
    }
    set title(title) {
        super.title = title
    }
};
class Note extends Project {
    constructor(title, text, priority) {
        this.title = title;
        this.text = text;
        this.priority = priority;
    }
}
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
    projects.push(new Project(addProjectTitle.value, addProjectDesc.value, addProjectPriority.value, addProjectDueDate.value, false))
    console.log(projects)
    displayProjectList()
})
export function openDialog() {
    const cards = document.querySelectorAll('.project-card')
    const cardPressed = e => {
        showProjectDialog(e.currentTarget.id)
    }
    for (const card of cards) {
        card.addEventListener('click', cardPressed)
    }
}

function showProjectDialog(i) {
    updateDialogContent(i)
    const dialog = document.getElementById('projectInfo')
    dialog.showModal()
    const addNoteBtn = document.getElementById('addNoteBtn')
    addNoteBtn.addEventListener('click', () => {
        console.log('yipp')
        showAddNoteDialog()
    })
}
function showAddNoteDialog() {
    const dialog = document.getElementById('addNoteDialog');
    dialog.showModal()
}
function addNote() {

}