const renderJournalEntries = (entries) => {

    const loggedEntriesContainer = document.querySelector(".entryLog");

    for (let i = 0; i < entries.length; i++) {
        const userInput = entries[i]
        console.log(userInput);
        loggedEntriesContainer.innerHTML += makeJournalEntryComponent(
            userInput
        )
    }


}


