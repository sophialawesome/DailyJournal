import makeJournalEntryComponent from "./entryComponent.js"

const renderJournalEntries = (entries) => {

    const loggedEntriesContainer = document.querySelector(".entryLog");

    for (let i = 0; i < entries.length; i++) {
        const userInput = entries[i]
        loggedEntriesContainer.innerHTML += makeJournalEntryComponent(userInput)
    }


}

export default renderJournalEntries
