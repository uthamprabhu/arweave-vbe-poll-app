'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import PollResult from '@/components/PollResult';
import { deletePoll } from '@/utils/pollData';

export default function ViewPolls() {
    const [polls, setPolls] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);

    const fetchPolls = () => {
        if (typeof window !== 'undefined') {
            const storedPolls = JSON.parse(localStorage.getItem('polls')) || [];
            setPolls(storedPolls);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPolls();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this poll? This action cannot be undone.')) {
            setDeletingId(id);
            const success = deletePoll(id);
            if (success) {
                fetchPolls(); // Refresh the list after deletion
            }
            setDeletingId(null);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="animate-pulse text-2xl font-bold text-gray-600">Loading polls...</div>
            </div>
        );
    }

    if (polls.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">No polls available</h1>
                <Link 
                    href="/create" 
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Create a Poll
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">All Polls</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={fetchPolls}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Refresh Polls
                        </button>
                        <Link 
                            href="/create" 
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                            Create New Poll
                        </Link>
                    </div>
                </div>

                <div className="grid gap-6">
                    {polls.map((poll) => (
                        <div key={`poll-${poll.id}`} className="bg-white p-6 rounded-2xl shadow-lg">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-semibold text-gray-800">{poll.question}</h2>
                                <div className="flex gap-4">
                                    <Link 
                                        href={`/poll/${poll.id}`}
                                        className="text-blue-500 hover:text-blue-600 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(poll.id)}
                                        disabled={deletingId === poll.id}
                                        className="text-red-500 hover:text-red-600 transition-colors disabled:opacity-50"
                                    >
                                        {deletingId === poll.id ? 'Deleting...' : 'Delete'}
                                    </button>
                                </div>
                            </div>
                            <PollResult poll={poll} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
