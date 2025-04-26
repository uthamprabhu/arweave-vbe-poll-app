'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PollForm from '@/components/PollForm';
import { savePoll } from '@/utils/PollData';
// import PollForm from '../../components/PollForm';
// import { savePoll } from '../../utils/pollData';

export default function CreatePoll() {
    const router = useRouter();

    const handleSubmit = (poll) => {
        const id = savePoll(poll);
        router.push(`/poll/${id}`);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Create Your Poll</h2>
            <PollForm onSubmit={handleSubmit} />
        </div>
    );
}
