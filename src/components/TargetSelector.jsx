import React from 'react';

const TargetSelector = ({ target, setTarget, skills, setSkills }) => {
    const availableTargets = ['NASA', 'The Moon', 'Coffee Machine', 'Time Machine'];
    const availableSkills = ['HTML', 'CSS', 'JavaScript', 'Python'];

    return (
        <div className="w-full max-w-md bg-gray-800 text-green-500 p-4 rounded-lg shadow-lg">
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Select Target:</label>
                <select
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    className="w-full p-2 bg-black border border-green-500 rounded"
                >
                    {availableTargets.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-bold mb-2">Select Skills:</label>
                <select
                    multiple
                    value={skills}
                    onChange={(e) => setSkills([...e.target.selectedOptions].map((opt) => opt.value))}
                    className="w-full p-2 bg-black border border-green-500 rounded"
                >
                    {availableSkills.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default TargetSelector;
