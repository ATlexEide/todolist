import { displayProjectList } from "./dom.js";

export let projects = []

class Project {
    constructor(title, desc, priority, dueDate) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
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
    projects.push(new Project(addProjectTitle.value, addProjectDesc.value, addProjectPriority.value, addProjectDueDate.value))
    console.log(projects)
    displayProjectList()
})