const makeJournalEntryComponent = (journalEntry) => {
 console.log(journalEntry);
    return `
          <div class="entryLog">
              <h1> ${journalEntry.conceptsCovered} </h1>
              <section> ${journalEntry.content} </section>
              <aside><b> ${journalEntry.date} </b></aside>
            <aside> ${journalEntry.mood} </aside>
          </div>
      `
}

export default makeJournalEntryComponent