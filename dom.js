import { projects } from "./note.js";

export function displayProjectList() {
    const container = document.getElementById('project-list');
    container.innerHTML = '';
    for (const project in projects) {
        const proj = document.createElement('li')
        proj.innerHTML = `<div class="card"></div>`
        container.appendChild(proj)
    }
}