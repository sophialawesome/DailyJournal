/*const clearForm = () =>{
    const dateInput = document.querySelector("#journalDate");
    const conceptInput = document.querySelector("#conceptsCovered");
    const journalEntryInput = document.querySelector("#journalEntry");
    const moodInput = document.querySelector("#mood");


    dateInput.value="";
    conceptInput.value="";
    journalEntryInput.value="";
    moodInput.value="";


}*/
import journalEntryAPI from "./data.js"
import renderJournalEntries from "./entriesDOM.js";

const addJournalSaveEventListener = () => {
    const saveButton = document.querySelector("#recordEntry");

    saveButton.addEventListener("click", () => {
        let userInput = {
            date: document.querySelector("#journalDate").value,
            conceptsCovered: document.querySelector("#conceptsCovered").value,
            content: document.querySelector("#journalEntry").value,
            mood: document.querySelector("#mood").value
        }

        journalEntryAPI.addEntry(userInput)
            .then(journalEntryAPI.getAllEntries)
            .then(renderJournalEntries)
    }


    );
}

export default addJournalSaveEventListener