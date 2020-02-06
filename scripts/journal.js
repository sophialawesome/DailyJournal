const journalEntry = {

    addJournalEntry: function (entry) {
        console.log(`${entry}`);
        this.entries.push(entry);
    },

    displayJournalEntry: function () {
        for (let i = 0; i < this.entries.length; i++) {
            console.log(this.entries[i]);
            //return (this.entries[i]);
        }

    }

};

const makeJournalEntryComponent = (journalEntry) => {
    return `
          <div class="entryLog">
              <h1> ${journalEntry.conceptsCovered} </h1>
              <section> ${journalEntry.content} </section>
              <aside><b> ${journalEntry.date} </b></aside>
          </div>
      `
}

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

fetch("http://127.0.0.1:3000/entries") 
    .then(entries => entries.json()) 
    .then(parsedEntries => {
       
        console.table(parsedEntries);

        renderJournalEntries(parsedEntries);
    })




