'use client';

import { useEffect, useState } from 'react';
import { getPollById } from '@/utils/pollData';
import { useParams } from 'next/navigation';
import PollVote from '@/components/PollVote';
import PollResult from '@/components/PollResult';

export default function PollPage() {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPoll = () => {
    const fetchedPoll = getPollById(id);
    if (fetchedPoll) {
      setPoll(fetchedPoll);
    } else {
      setPoll(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPoll();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-2xl font-bold text-gray-600">Loading poll...</div>
      </div>
    );
  }

  if (!poll) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">Poll not found ❌</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-xl mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{poll.question}</h1>

        <div className="space-y-8">
          <PollVote poll={poll} onVote={fetchPoll} />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Results</h2>
            <PollResult poll={poll} />
            <button
              onClick={fetchPoll}
              className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Refresh Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
