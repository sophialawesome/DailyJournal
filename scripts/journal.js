const journalEntry = {
    date: "January 17, 2020",
    conceptsCovered: "functions",
    content: "It was a bit of a learning curve for me, but the practice examples in class helped me understand the concepts better.",
    mood: "sad", 
    entries:[],
    
    addJournalEntry: function(entry){
        console.log(`${entry}`);
        this.entries.push(entry);
    },

    displayJournalEntry: function()
    {
        for (let i=0; i<this.entries.length; i++){
            console.log(this.entries[i]);
        }

    }
        
};

journalEntry.addJournalEntry("I learned about objects.");
journalEntry.addJournalEntry("I learned about functions and how they are utilized.");
journalEntry.addJournalEntry("I learned about DOM.");