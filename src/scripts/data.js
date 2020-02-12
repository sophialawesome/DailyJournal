/*const journalEntryAPI = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    }
}


export default journalEntryAPI */
const journalEntryAPI = "http://localhost:8088/entries"

export default {
    getAllEntries() {
        return fetch(`${journalEntryAPI}`)
            .then(response => response.json());
    },
    addEntry(entry) {
        return fetch(`${journalEntryAPI}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    }
}

