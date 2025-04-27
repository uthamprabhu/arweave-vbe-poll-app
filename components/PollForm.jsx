'use client';

import { useState } from 'react';

export default function PollForm({ onCreate }) {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '']);

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => {
        setOptions([...options, '']);
    };

    const removeOption = (index) => {
        if (options.length <= 2) return; // Minimum 2 options always
        const newOptions = options.filter((_, idx) => idx !== index);
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ question, options: options.filter(opt => opt.trim() !== '') });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Create a Quick Poll 🚀</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block mb-2 text-gray-700">Poll Question</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="What's your question?"
                        required
                    />
                </div>

                {options.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder={`Option ${index + 1}`}
                            required
                        />
                        {options.length > 2 && (
                            <button
                                type="button"
                                onClick={() => removeOption(index)}
                                className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition"
                            >
                                ❌
                            </button>
                        )}
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addOption}
                    className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
                >
                    ➕ Add Option
                </button>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all"
                >
                    ✅ Create Poll
                </button>
            </form>
        </div>
    );
}
