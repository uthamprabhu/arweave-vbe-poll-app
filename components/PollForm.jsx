'use client';

import { useState } from 'react';

export default function PollForm({ onSubmit }) {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '']);

    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ question, options });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Poll Question"
                className="border p-2 rounded"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
            />
            {options.map((opt, idx) => (
                <input
                    key={idx}
                    type="text"
                    placeholder={`Option ${idx + 1}`}
                    className="border p-2 rounded"
                    value={opt}
                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                    required
                />
            ))}
            <button type="button" onClick={handleAddOption} className="bg-green-500 text-white p-2 rounded">
                Add Option
            </button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Create Poll
            </button>
        </form>
    );
}
