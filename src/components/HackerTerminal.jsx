import React from 'react';
import './HackerTerminal.css'; 

const HackerTerminal = ({ logs, status }) => {
    const getStatusColor = () => {
        switch (status) {
            case 'success': return '#0f0';
            case 'failure': return '#f00';
            default: return '#fff';
        }
    };

    return (
        <div className="terminal">
            <div className="status-bar" style={{ color: getStatusColor() }}>
                Status: {status.toUpperCase()}
            </div>
            <div className="logs">
                {logs.map((log, index) => (
                    <div key={index}>{log}</div>
                ))}
            </div>
        </div>
    );
};

export default HackerTerminal;
