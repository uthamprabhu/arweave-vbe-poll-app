'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">Quick Polls 🎯</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-xl">
        Instantly create polls, share them, and get quick opinions from your friends and team!
      </p>

      <div className="flex gap-6">
        <button
          onClick={() => router.push('/create')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold transition-all"
        >
          ➕ Create Poll
        </button>

        <button
          onClick={() => router.push('/view')}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-lg font-semibold transition-all"
        >
          👀 View Poll
        </button>
      </div>
    </div>
  );
}
