// PollResult.jsx

'use client';

export default function PollResult({ poll }) {
    if (!poll || !poll.options) {
        return <div className="text-red-500">No poll data available</div>;
    }

    const totalVotes = poll.options.reduce((sum, o) => sum + (o.votes || 0), 0);

    return (
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            {poll.options.map((option, idx) => {
                const percentage = totalVotes > 0 
                    ? Math.round((option.votes / totalVotes) * 100) 
                    : 0;
                
                return (
                    <div key={`${poll.id}-option-${idx}`} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{option.text}</span>
                            <span className="text-sm text-gray-600">
                                {option.votes} {option.votes === 1 ? 'vote' : 'votes'} ({percentage}%)
                            </span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
