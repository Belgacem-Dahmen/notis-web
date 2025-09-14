class NotesPage {
  private noteInput = "textarea[data-test=note-input]";   // adjust selector
  private saveButton = "button[data-test=save-note]";     // adjust selector
  private notesList = "ul[data-test=notes-list] li";      // adjust selector
  private deleteButton = "button[data-test=delete-note]"; // adjust selector

  visit() {
    cy.visit("/notes");
  }

  typeNote(note: string) {
    cy.get(this.noteInput).clear().type(note);
  }

  saveNote() {
    cy.get(this.saveButton).click();
  }

  getNotes() {
    return cy.get(this.notesList);
  }

  deleteFirstNote() {
    cy.get(this.deleteButton).first().click();
  }
}

export default new NotesPage();
