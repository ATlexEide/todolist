import { projects } from "./note.js";

export function displayProjectList() {
    const container = document.getElementById('project-list');
    // container.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {
        if (!projects[i].displayed) {
            const proj = document.createElement('li');
            proj.innerHTML = `
            <a href="#" class="project-card">
            <div class="card">
                <h3>Title: ${projects[i].title}</h3>
                <div>Desscription:</div>
                <p>${projects[i].desc}</p>
                <div>Priority: ${projects[i].priority}</div>
                <div>Due by ${projects[i].dueDate}</div>
            </div>
            </a>`;
            container.appendChild(proj);
            projects[i].displayed = true;
        }
    }
}