'use client';

import { useRouter } from 'next/navigation';
import PollForm from '@/components/PollForm';
import { savePoll } from '@/utils/pollData';

export default function CreatePoll() {
  const router = useRouter();

  const handleCreate = (poll) => {
    const id = savePoll(poll);
    router.push(`/poll/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <PollForm onCreate={handleCreate} />
    </div>
  );
}
