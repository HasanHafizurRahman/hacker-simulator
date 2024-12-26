import React, { useState } from 'react';
import { useHacking } from 'usehacking';
import HackerTerminal from './components/HackerTerminal';
import TargetSelector from './components/TargetSelector';
import './App.css';

const App = () => {
    const [target, setTarget] = useState('NASA');
    const [skills, setSkills] = useState(['HTML']);
    const { logs, status, startHacking, reset } = useHacking(target, skills);

    return (
        <div className="app">
            <h1>💻 Hacker Simulator</h1>
            <TargetSelector target={target} setTarget={setTarget} skills={skills} setSkills={setSkills} />
            <button onClick={startHacking} disabled={status === 'hacking'}>Start Hacking</button>
            <button onClick={reset}>Reset</button>
            <HackerTerminal logs={logs} status={status} />
        </div>
    );
};

export default App;
