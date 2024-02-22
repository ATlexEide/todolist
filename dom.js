import { projects, getIndexOfClickedCardAndOpenModal } from "./note.js";


// Display projects as cards on page
export function displayProjectList() {
    const container = document.getElementById('project-list');
    container.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {
        const proj = document.createElement('li');
        // TODO: Replace innerHTML with safer methods later
        proj.innerHTML = `
            <a href="#" class="project-card" id="${i}">
            <div class="card">
                <h3>Title: ${projects[i].title}</h3>
                <div>Desscription:</div>
                <p>${projects[i].desc}</p>
                <div>Priority: ${projects[i].priority}</div>
                <div id="${i}-due">Due by ${projects[i].dueDate}</div>
            </div>
            </a>`;
        container.appendChild(proj);
        if (!projects[i].dueDate) {
            const due = document.getElementById(`${i}-due`);
            due.innerHTML = '';
        }
    }
    getIndexOfClickedCardAndOpenModal()
}

// Display and update content in project dialog
export function displayProjectDialog(index) {
    const dialog = document.getElementById('projectInfo')
    // TODO: Replace innerHTML with safer methods later
    dialog.innerHTML = `<div id="project-dialog-container">
    <form tabindex="0" id="project-dialog-form">
    <div id="dialog-header">
    <button type="submit" id="exit-button"><i style="color:white" class="fa fa-angle-double-left fa-3x" aria-hidden="true"></i></button>
    <input id="project-title" value="${projects[index].title}">
    </div>
    <details>
    <h3>Description: ${projects[index].desc}</h3>
    <h4>Priority: ${projects[index].priority}</h4>
    <h5>Due: ${projects[index].dueDate}</h5>
    </details>

    </form>
    <h2>Notes:</h2>
    <div id="project-note-container">
    <ul id="note-list"></ul>
    <button class="card" id="addNoteBtn"><i class="fa-solid fa-plus fa-5x"></i></button>
    </div>
    </div>
    `
    dialog.showModal()
}