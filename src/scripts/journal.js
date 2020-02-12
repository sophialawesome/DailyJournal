//import entries from "./data.js"
import journalEntryAPI from "./data.js"
import renderJournalEntries from "./entriesDOM.js"
import makeJournalEntryComponent from "./entryComponent.js"
import addJournalSaveEventListener from "./saveJournalEntries.js"
//import getAllEntries from "./data.js"
//import addEntry from "./data.js"
//import saveJournalEntries from "./savejournalEntries.js"

//journalEntryAPI.getJournalEntries().then(renderJournalEntries);
addJournalSaveEventListener();

//gets all the journal entries from the API and renders them in the DOM
journalEntryAPI.getAllEntries().then(entries => renderJournalEntries(entries));