function addNote() {

    const note = {
        title: document.getElementById("title").value,
        subject: document.getElementById("subject").value,
        description: document.getElementById("description").value
    };

    fetch("/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(data => {
        alert("Note Added Successfully");
        viewNotes();
    });
}



function viewNotes() {

    fetch("/notes")
    .then(res => res.json())
    .then(data => {

        let output = "";

        data.forEach(note => {

            output += `
            <div class="note">

                <h4>${note.title}</h4>

                <b>Subject:</b> ${note.subject}
                <br>

                <b>Description:</b> ${note.description}
                <br><br>

                <button class="deleteBtn" onclick="deleteNote('${note._id}')">
                Delete
                </button>

            </div>
            `;
        });

        document.getElementById("notes").innerHTML = output;

    });

}



function deleteNote(id) {

    fetch("/notes/" + id, {
        method: "DELETE"
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        viewNotes();
    });

}