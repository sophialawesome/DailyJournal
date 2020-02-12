import makeJournalEntryComponent from "./entryComponent.js"

const renderJournalEntries = (entries) => {
    console.log("look here", entries);
    
    const loggedEntriesContainer = document.querySelector(".entryLog");
    const clearForm = document.querySelector(".entryLog");
    clearForm.innerHTML="";

    for (let i = 0; i < entries.length; i++) {
        const userInput = entries[i]
        loggedEntriesContainer.innerHTML += makeJournalEntryComponent(userInput)
    }


}

export default renderJournalEntries
