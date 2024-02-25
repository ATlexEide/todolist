import { projects, currIndex, getIndexOfClickedCardAndOpenModal, drawAddNoteDialog, checkForTitleChange, getFromLocalStorage, getIdOfClickedElementAndDelete } from "./index.js";


// Display projects as cards on page
export function displayProjectList() {
    getFromLocalStorage()
    const container = document.getElementById('project-list');
    container.textContent = '';
    for (let i = 0; i < projects.length; i++) {
        const proj = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('class', 'project-card');
        const header = document.createElement('header');
        const div = document.createElement('div');
        div.setAttribute('class', 'card project');
        div.setAttribute('id', `card-${i}`);
        const h3 = document.createElement('h3');
        h3.textContent = `${projects[i].title}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-button');
        deleteBtn.setAttribute('id', `${i}`);
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-trash');
        deleteIcon.setAttribute('aria-hidden', 'true');
        a.appendChild(div);
        header.appendChild(h3)
        div.appendChild(header)
        // Description
        if (projects[i].desc) {
            const desc = document.createElement('div');
            desc.textContent = `Description:`;
            const p = document.createElement('p');
            p.textContent = `${projects[i].desc}`;
            div.appendChild(desc)
            div.appendChild(p)
        }
        // Priority
        if (projects[i].priority !== 'none') {
            const priority = document.createElement('div');
            priority.setAttribute('id', 'priority')
            priority.textContent = `Priority: ${projects[i].priority}`;
            div.appendChild(priority)
        }
        // Due date
        if (projects[i].dueDate) {
            const due = document.createElement('div');
            due.setAttribute('id', `${i}-due`);
            due.textContent = `Due by ${projects[i].dueDate}`;
            div.appendChild(due)
        }
        proj.appendChild(a);
        a.appendChild(deleteBtn);
        deleteBtn.appendChild(deleteIcon);
        container.appendChild(proj);

    }
    getIdOfClickedElementAndDelete()
    getIndexOfClickedCardAndOpenModal()
}
// Display and update content in project dialog
export function displayProjectDialog(index) {
    if (projects.length <= 0) { return }
    const dialog = document.getElementById('projectInfo');
    dialog.textContent = '';
    const container = document.createElement('div');
    container.setAttribute('id', 'project-dialog-container');
    const form = document.createElement('form');
    form.setAttribute('tabindex', '0');
    form.setAttribute('id', 'project-dialog-form');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const button = document.createElement('button');
    button.setAttribute('id', 'exit-button');
    const i = document.createElement('i');
    i.setAttribute('style', 'color:white');
    i.setAttribute('class', 'fa fa-angle-double-left fa-3x');
    i.setAttribute('aria-hidden', 'true');
    const input = document.createElement('input');
    input.setAttribute('id', 'project-title');
    input.setAttribute('value', `${projects[currIndex].title}`);
    const details = document.createElement('details');
    const h3 = document.createElement('h3');
    h3.textContent = `Description: ${projects[index].desc}`;
    const h4 = document.createElement('h4');
    h4.textContent = `Priority: ${projects[index].priority}`;
    const h5 = document.createElement('h5');
    h5.textContent = `Due: ${projects[index].dueDate}`;


    const h2 = document.createElement('h2');
    h2.textContent = 'Notes:';
    const div = document.createElement('div');
    div.setAttribute('id', 'project-note-container');
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'note-list');
    const addButton = document.createElement('button');
    addButton.setAttribute('class', 'card');
    addButton.setAttribute('id', 'addNoteButton');
    const iNote = document.createElement('i');
    iNote.setAttribute('class', 'fa-solid fa-plus fa-5x');



    container.appendChild(form);
    dialog.appendChild(container);
    button.appendChild(i);
    header.appendChild(button)
    form.appendChild(input);
    form.appendChild(header);
    details.appendChild(h3);
    details.appendChild(h4);
    details.appendChild(h5);
    form.appendChild(details)

    container.appendChild(div)
    div.appendChild(ul);
    div.appendChild(addButton)
    addButton.appendChild(iNote)


    document.getElementById('exit-button').addEventListener('click', () => {
        dialog.close()
        checkForTitleChange(index)
    })
    displayNotes();
    dialog.showModal();
    drawAddNoteDialog();
    getIdOfClickedElementAndDelete()
}

export function displayNotes() {
    const noteContainer = document.getElementById('note-list');
    noteContainer.textContent = '';
    for (let i = 0; i < projects[currIndex].notes.length; i++) {
        const header = document.createElement('header');
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
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-button');
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-trash');
        deleteIcon.setAttribute('aria-hidden', 'true');
        deleteBtn.appendChild(deleteIcon)
        header.appendChild(h2)
        header.appendChild(deleteBtn)
        noteLi.appendChild(header)
        noteLi.appendChild(p)
        noteLi.appendChild(div)
        noteContainer.appendChild(noteLi);
        if (!note.priority) {
            const notePriority = document.getElementById('note-priority');
            notePriority.textContent = '';
        }
    }
}