const body = document.body;
export function writeHTML() {
    writeNoteList();
    writeButton();
    writeModal();

}
// Container for note list
const container = document.createElement('div');
container.setAttribute('id', 'container')
body.appendChild(container)
const noteContainer = document.createElement('div');
noteContainer.setAttribute('id', 'note-container');
container.appendChild(noteContainer)
// List for notes
const noteList = document.createElement('ul');
noteList.setAttribute('class', 'note-list')
noteContainer.appendChild(noteList)
export function writeNote(note) {
    const title = document.createElement('h2');
    const desc = document.createElement('p');
    const due = document.createElement('h3')
    const priority = document.createElement('h3')


    const newNote = document.createElement('li');
    newNote.setAttribute('class', 'note')
    title.textContent = `${note.title}`;
    due.textContent = `Due: ${note.dueDate}`
    priority.textContent = `Priority: ${note.priority}`
    desc.textContent = `Description: ${note.description}`
    newNote.appendChild(title)
    newNote.appendChild(due)
    newNote.appendChild(priority)
    newNote.appendChild(desc)

    noteList.appendChild(newNote)
};

// Modal
function writeModal() {
    const addNoteDialog = document.createElement('dialog');
    addNoteDialog.setAttribute('id', 'add-dialog')
    const addNoteModal = document.createElement('modal');
    addNoteModal.setAttribute('id', 'add-modal')
    addNoteModal.innerHTML = `
    <form id="addNoteForm" method="dialog">
    <label for="title">Title:</label><input id="addNoteTitle" type="text">
    <label for="desc">Description:</label><textarea id="addNoteDesc" type="text"></textarea>


    <label for="priority">Priority:</label>
    <select id="addNotePriority" name="priority">
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>

    <button id="submitAddBtn" type="submit">Submit</button>
    </form>
`
    addNoteDialog.appendChild(addNoteModal)
    body.appendChild(addNoteDialog)
}

function writeButton() {
    const btn = document.createElement('button')
    btn.setAttribute('id', 'addNoteBtn')
    btn.innerHTML = `<i class="fa-solid fa-plus fa-3x"></i>`
    container.appendChild(btn)
}

function writeNoteList() {
    noteContainer.appendChild(noteList)
    body.appendChild(noteContainer)
}