'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import PollResult from '@/components/PollResult';
import PollVote from '@/components/PollVote';
import { getPoll } from '@/utils/PollData';

export default function PollPage() {
    const { id } = useParams();
    const poll = getPoll(id);
    const [voted, setVoted] = useState(false);

    if (!poll) return <div className="p-6">Poll not found!</div>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{poll.question}</h2>
            {!voted ? (
                <PollVote poll={poll} onVote={() => setVoted(true)} />
            ) : (
                <PollResult poll={poll} />
            )}
        </div>
    );
}
