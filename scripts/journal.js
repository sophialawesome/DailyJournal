const journalEntry = {
    /* date: "January 17, 2020",
     conceptsCovered: "functions",
     content: "It was a bit of a learning curve for me, but the practice examples in class helped me understand the concepts better.",
     mood: "sad", 
  */
    entries: [
        {
            date: "January 19, 2020",
            conceptsCovered: "DOM",
            content: "It was bit difficult to wrap my mind around. I need to practice more with DOM.",
            mood: "okay"
        }
    ],

    addJournalEntry: function (entry) {
        console.log(`${entry}`);
        this.entries.push(entry);
    },

    displayJournalEntry: function () {
        for (let i = 0; i < this.entries.length; i++) {
            console.log(this.entries[i]);
        }

    } 

};

const makeJournalEntryComponent = (date, conceptsCovered, content, mood) => {
    return `
        <div class="journalEntry">
            <h1> ${conceptsCovered} </h1>
            <section>  </section>
            <aside> ${content} </aside>
        </div>
    `
}

const renderJournalEntries = (entries) => {

    const loggedEntriesContainer = document.querySelector("#entryLog");

    for(let i=0; i < entries.length; i++){
        const userInput = entries[i]
        loggedEntriesContainer.innerHTML += makeJournalEntryComponent(
            userInput.journalEntry
        )
    }

   // loggedEntry.innerHTML = makeJournalEntryComponent();
}

// Invoke the render function
renderJournalEntries(journalEntry);

console.log(journalEntry);

/*const userInput = document.querySelector(".journalDate");
journalEntry.addJournalEntry(userInput);
console.log(journalEntry);

journalEntry.addJournalEntry("I learned about objects.");
journalEntry.addJournalEntry("I learned about functions and how they are utilized.");
journalEntry.addJournalEntry("I learned about DOM.");
*/
