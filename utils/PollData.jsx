const polls = {};

export function savePoll({ question, options }) {
    const id = Date.now().toString();
    polls[id] = {
        id,
        question,
        options: options.map(opt => ({ text: opt, votes: 0 }))
    };
    return id;
}

export function getPoll(id) {
    return polls[id];
}

export function votePoll(id, index) {
    if (polls[id]) {
        polls[id].options[index].votes++;
    }
}
