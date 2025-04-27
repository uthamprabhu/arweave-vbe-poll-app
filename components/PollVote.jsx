// PollVote.jsx

'use client';

import { votePoll } from '@/utils/pollData';

export default function PollVote({ poll, onVote }) {
    const handleVote = (index) => {
        votePoll(poll.id, index);
        onVote(); // Trigger a callback to refresh or show results
    };

    return (
        <div className="flex flex-col gap-4">
            {poll.options.map((option, idx) => (
                <button
                    key={idx}
                    onClick={() => handleVote(idx)}
                    className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
                >
                    {option.text}
                </button>
            ))}
        </div>
    );
}
