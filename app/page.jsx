import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl font-bold text-blue-600">QuickPoll 🗳️</h1>
      <Link href="/create" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        Create a New Poll
      </Link>
    </div>
  );
}
