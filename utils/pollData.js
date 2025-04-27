// utils/pollData.js

export function savePoll(poll) {
    const newPoll = { 
        ...poll, 
        id: Date.now().toString(), 
        options: poll.options.map(option => ({ text: option, votes: 0 })) // Initialize with 0 votes
    };

    const existingPolls = JSON.parse(localStorage.getItem('polls')) || [];
    existingPolls.push(newPoll);
    localStorage.setItem('polls', JSON.stringify(existingPolls));

    return newPoll.id;
}

export function getPollById(id) {
    if (typeof window !== 'undefined') {
        const storedPolls = JSON.parse(localStorage.getItem('polls')) || [];
        return storedPolls.find(poll => poll.id === id);
    }
    return null;
}

export function votePoll(id, optionIndex) {
    if (typeof window !== 'undefined') {
        const storedPolls = JSON.parse(localStorage.getItem('polls')) || [];
        const poll = storedPolls.find(p => p.id === id);
        
        if (poll) {
            poll.options[optionIndex].votes += 1;
            localStorage.setItem('polls', JSON.stringify(storedPolls));
        }
    }
}

export function deletePoll(id) {
    if (typeof window !== 'undefined') {
        const storedPolls = JSON.parse(localStorage.getItem('polls')) || [];
        const updatedPolls = storedPolls.filter(poll => poll.id !== id);
        localStorage.setItem('polls', JSON.stringify(updatedPolls));
        return true;
    }
    return false;
}
