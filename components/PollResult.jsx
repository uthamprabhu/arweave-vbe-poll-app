export default function PollResult({ poll }) {
    const totalVotes = poll.options.reduce((sum, o) => sum + o.votes, 0);

    return (
        <div className="flex flex-col gap-4">
            {poll.options.map((option, idx) => (
                <div key={idx} className="border p-2 rounded">
                    <div className="flex justify-between">
                        <span>{option.text}</span>
                        <span>{option.votes} votes</span>
                    </div>
                    <div className="h-2 bg-gray-300 mt-2">
                        <div
                            className="h-full bg-blue-500"
                            style={{ width: `${(option.votes / totalVotes) * 100 || 0}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
