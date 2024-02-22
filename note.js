import { displayProjectList, displayProjectDialog } from "./dom.js";

export let projects = []

class Project {
    constructor(title, desc, priority, dueDate) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        // ???
        this.isDisplayed = false;
        // ???
        this.notes = ['testNote', 'Testnote'];
    }
    get title() {
        return super.title;
    }
    set title(title) {
        super.title = title
    }
};
class Note extends Project {
    constructor(project, title, text, priority) {
        super(project)
        this.project = project
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
    displayProjectList()
})

let currIndex = null;
export function getIndexOfClickedCardAndOpenModal() {
    const cards = document.getElementsByClassName('project-card');
    const cardPressed = e => {
        let index = e.currentTarget.id;  // Get ID of Clicked Element
        currIndex = index
        displayProjectDialog(currIndex)
        console.log('clicked: ', currIndex)
    }
    for (let card of cards) {
        card.addEventListener("click", cardPressed);
    }
};