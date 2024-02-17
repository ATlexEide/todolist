import { projects } from "./note.js";

export function displayProjectList() {
    const container = document.getElementById('project-list');
    // container.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {
        if (!projects[i].isDisplayed) {
            const proj = document.createElement('li');
            proj.innerHTML = `
            <a href="#" class="project-card">
            <div class="card" id="${i}">
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
            projects[i].isDisplayed = true;
        }
    }
}