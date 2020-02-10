import entries from "./data.js"
import journalEntryAPI from "./data.js"
import renderJournalEntries from "./entriesDOM.js"
import makeJournalEntryComponent from "./entryComponent.js"

journalEntryAPI.getJournalEntries().then(renderJournalEntries);