import { writeNote, writeHTML } from "./dom.js";
let projectList = [];
writeHTML()


class Note {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
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
const testNote = new Note('Test note', 'note for testing', 'Now', 'low')


const addNoteBtn = document.getElementById('addNoteBtn');
const dialog = document.getElementById('add-dialog');
addNoteBtn.addEventListener('click', () => {
    dialog.showModal()
})

const submitBtn = document.getElementById('submitAddBtn')
const addTitle = document.getElementById('addNoteTitle')
const addDesc = document.getElementById('addNoteDesc')
const addPriority = document.getElementById('addNotePriority')



submitBtn.addEventListener('click', () => {
    const title = addTitle.value;
    const description = addDesc.value;
    const priority = addPriority.value;
    projectList.push(new Note(title, description, 'TBD', priority))
    console.log(`title: ${title}, description: ${description}, due: , priority: ${priority}`)
    console.log(`Project list:`)
    console.log(projectList)
})