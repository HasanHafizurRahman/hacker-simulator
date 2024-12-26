import React from 'react';

const TargetSelector = ({ target, setTarget, skills, setSkills }) => {
    const availableTargets = ['NASA', 'The Moon', 'Coffee Machine', 'Time Machine'];
    const availableSkills = ['HTML', 'CSS', 'JavaScript', 'Python'];

    return (
        <div className="selector">
            <label>
                Select Target:
                <select value={target} onChange={(e) => setTarget(e.target.value)}>
                    {availableTargets.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </label>

            <label>
                Select Skills:
                <select multiple value={skills} onChange={(e) => setSkills([...e.target.selectedOptions].map(opt => opt.value))}>
                    {availableSkills.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default TargetSelector;
